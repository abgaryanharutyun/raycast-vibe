# Vibe — Project and Agent Launcher

Vibe is a Raycast extension for developers who want to jump from a project name to a ready-to-use coding workspace in seconds.

Search local projects, open them in your editor, launch a coding agent in the project directory, and perform safe Git actions without leaving Raycast.

## Features

- Search local folders by project name or full path.
- Detect Git repositories, repository names, remotes, branches, and working-tree status.
- Launch projects with Claude Code, Codex, Gemini CLI, or configurable custom agents.
- Open a project in Visual Studio Code, Cursor, Finder, or Terminal.
- Choose between macOS Terminal, Ghostty, and iTerm.
- Remember recently used and pinned projects.
- Remember the last agent used for each project and run it again quickly.
- Open the project’s GitHub repository when a GitHub remote is available.
- Fetch and refresh Git status with `git fetch --all --prune`.
- Switch local branches with a confirmation when the working tree is dirty.
- Create and switch to remote tracking branches only after explicit confirmation.
- Pull changes with `git pull --ff-only` without automatically merging or rebasing.

## Requirements

- macOS.
- Raycast.
- A local project directory indexed by macOS Spotlight.
- Any coding-agent CLI you want to use, such as Claude Code, Codex, or Gemini CLI.
- Git for repository actions.

Vibe does not require API keys, a cloud account, or a separate backend.

## Installation

### From the Raycast Store

Once published, search for **Vibe** in the Raycast Store and install it.

### Development installation

Clone the repository, install dependencies, and start Raycast’s development mode:

```bash
npm install
npm run dev
```

To validate the extension:

```bash
npm run build
npm run lint
```

## Configuration

Open Raycast Extension Preferences for Vibe and configure:

### Terminal

Choose where Vibe opens projects:

- macOS Terminal
- Ghostty
- iTerm

### Coding agents

Claude Code, Codex, and Gemini CLI are enabled by default. For each agent you can configure:

- Enabled or disabled state.
- Executable name or absolute path.
- Optional startup arguments.
- Optional environment variables, one `KEY=value` entry per line.

You can also configure up to three custom agents.

If an agent command is not installed or cannot be found, configure its absolute executable path in preferences.

## Usage

1. Open Raycast and search for **Vibe**.
2. Search for a project by folder name, path, repository name, or remote URL.
3. Select a project.
4. Use **Choose Agent** to launch an agent in the project directory, or use the direct editor and terminal actions.
5. Open **Git Actions** for repository operations.

Vibe opens coding agents from the repository root when the selected folder is inside a Git repository. Otherwise, it uses the selected folder itself.

## Git safety

Vibe intentionally provides a conservative Git workflow:

- Fetch uses `git fetch --all --prune`.
- Pull uses `git pull --ff-only`.
- Dirty working trees require confirmation before branch switching or pulling.
- Remote branches require confirmation before creating a local tracking branch.
- Vibe does not reset, discard, stash, merge, rebase, delete branches, or force-push.

If a pull cannot be completed as a fast-forward, Vibe reports the problem and leaves manual resolution to the user.

## Privacy

Vibe operates locally. It searches local folders using macOS Spotlight and executes configured local commands. It does not send project names, paths, source code, Git data, or credentials to a Vibe server.

When you choose to open a GitHub repository, Vibe opens the detected remote URL in your browser. Git itself may communicate with configured Git remotes when you use fetch or pull.

## Support and feedback

Please open an issue in the [project repository](https://github.com/abgaryanharutyun/raycast-vibe) with:

- A short description of the problem.
- Steps to reproduce it.
- The relevant Raycast and macOS versions.
- Any non-sensitive error message shown by Vibe.

Do not include API keys, access tokens, private repository URLs, or source code from private projects.

## License

MIT
