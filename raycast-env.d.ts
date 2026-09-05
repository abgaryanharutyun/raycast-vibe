/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Terminal - Where Vibe opens projects */
  "terminal": "terminal" | "ghostty" | "iterm",
  /** undefined - Enable or disable this option. */
  "claudeEnabled": boolean,
  /** Claude Command - Executable name or path */
  "claudeCommand": string,
  /** Claude Arguments - Optional startup arguments */
  "claudeArgs": string,
  /** Claude Environment Variables - Optional KEY=value entries, one per line */
  "claudeEnv": string,
  /** undefined - Enable or disable this option. */
  "codexEnabled": boolean,
  /** Codex Command - Executable name or path */
  "codexCommand": string,
  /** Codex Arguments - Optional startup arguments */
  "codexArgs": string,
  /** Codex Environment Variables - Optional KEY=value entries, one per line */
  "codexEnv": string,
  /** undefined - Enable or disable this option. */
  "geminiEnabled": boolean,
  /** Gemini Command - Executable name or path */
  "geminiCommand": string,
  /** Gemini Arguments - Optional startup arguments */
  "geminiArgs": string,
  /** Gemini Environment Variables - Optional KEY=value entries, one per line */
  "geminiEnv": string,
  /** undefined - Enable or disable this option. */
  "customEnabled": boolean,
  /** Custom Agent Name - Configure this extension option. */
  "customName": string,
  /** Custom Agent Command - Executable name or path */
  "customCommand": string,
  /** Custom Agent Arguments - Optional startup arguments */
  "customArgs": string,
  /** Custom Agent Environment Variables - Optional KEY=value entries, one per line */
  "customEnv": string,
  /** undefined - Enable or disable this custom agent. */
  "custom2Enabled": boolean,
  /** Custom Agent 2 Name - Display name for this custom agent. */
  "custom2Name": string,
  /** Custom Agent 2 Command - Executable name or path */
  "custom2Command": string,
  /** Custom Agent 2 Arguments - Optional startup arguments */
  "custom2Args": string,
  /** Custom Agent 2 Environment Variables - Optional KEY=value entries, one per line */
  "custom2Env": string,
  /** undefined - Enable or disable this custom agent. */
  "custom3Enabled": boolean,
  /** Custom Agent 3 Name - Display name for this custom agent. */
  "custom3Name": string,
  /** Custom Agent 3 Command - Executable name or path */
  "custom3Command": string,
  /** Custom Agent 3 Arguments - Optional startup arguments */
  "custom3Args": string,
  /** Custom Agent 3 Environment Variables - Optional KEY=value entries, one per line */
  "custom3Env": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `vibe` command */
  export type Vibe = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `vibe` command */
  export type Vibe = {}
}

