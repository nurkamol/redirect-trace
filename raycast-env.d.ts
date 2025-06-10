/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Max Redirects - Maximum number of redirects to follow */
  "maxRedirects": string,
  /** Timeout (ms) - Request timeout in milliseconds */
  "timeout": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `trace-redirects` command */
  export type TraceRedirects = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `trace-redirects` command */
  export type TraceRedirects = {}
}

