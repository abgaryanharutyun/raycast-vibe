import {
  Action,
  ActionPanel,
  Icon,
  List,
  Toast,
  showToast,
} from "@raycast/api";
import React from "react";
import { basename } from "node:path";
import { Worktree, enrichDirty, listWorktrees } from "../worktrees";
import { AgentPicker, openApplication, openPath } from "../vibe";

export function WorktreeList({
  repoRoot,
  onRefresh,
}: {
  repoRoot: string;
  onRefresh?: () => void;
}) {
  const [worktrees, setWorktrees] = React.useState<Worktree[]>([]);
  const [loading, setLoading] = React.useState(true);

  const refresh = React.useCallback(async () => {
    setLoading(true);
    try {
      const base = await listWorktrees(repoRoot);
      setWorktrees(base);
      const enriched = await enrichDirty(base);
      setWorktrees(enriched);
    } catch (error) {
      await showToast({
        style: Toast.Style.Failure,
        title: "Could not list worktrees",
        message: error instanceof Error ? error.message : String(error),
      });
    } finally {
      setLoading(false);
    }
  }, [repoRoot]);

  React.useEffect(() => {
    void refresh();
  }, [refresh]);

  return (
    <List
      navigationTitle="Worktrees"
      searchBarPlaceholder="Search worktrees…"
      isLoading={loading}
    >
      {worktrees.map((wt) => {
        const title = wt.isMain ? basename(wt.path) : basename(wt.path);
        const subtitle = wt.isMain ? "main working tree" : wt.path;
        const accessories: { text: string; icon?: Icon }[] = [];
        if (wt.detached) accessories.push({ text: "detached" });
        else if (wt.branch) accessories.push({ text: wt.branch });
        if (wt.sha) accessories.push({ text: wt.sha });
        if (wt.dirty)
          accessories.push({ text: "dirty", icon: Icon.ExclamationMark });
        return (
          <List.Item
            key={wt.path}
            icon={wt.isMain ? Icon.House : Icon.Folder}
            title={title}
            subtitle={subtitle}
            accessories={accessories}
            actions={
              <ActionPanel>
                <Action.Push
                  title="Choose Agent"
                  icon={Icon.Stars}
                  target={
                    <AgentPicker
                      folder={{
                        name: basename(wt.path),
                        path: wt.path,
                      }}
                      onRefresh={onRefresh}
                    />
                  }
                />
                <Action
                  title="Open in Visual Studio Code"
                  icon={Icon.Code}
                  onAction={() =>
                    void openApplication("Visual Studio Code", wt.path)
                  }
                />
                <Action
                  title="Open in Cursor"
                  icon={Icon.Code}
                  onAction={() => void openApplication("Cursor", wt.path)}
                />
                <Action
                  title={
                    process.platform === "win32"
                      ? "Open in File Explorer"
                      : "Open in Finder"
                  }
                  icon={Icon.Finder}
                  onAction={() => void openPath(wt.path)}
                />
                <Action.CopyToClipboard title="Copy Path" content={wt.path} />
              </ActionPanel>
            }
          />
        );
      })}
    </List>
  );
}
