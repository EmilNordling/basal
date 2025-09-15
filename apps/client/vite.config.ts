/* Visit https://vitejs.dev/guide/ to read more about this file */

import { defineProject } from "vitest/config";
import Inspect from "vite-plugin-inspect";
import visualizer from "rollup-plugin-visualizer";
import debug from "debug";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { splitVendorChunkPlugin, PluginOption } from "vite";
import { dependencyInjection } from "@wox-team/wox-inject-vite";
import { extendTheme, pigment } from "@pigment-css/vite-plugin";

// Run these like: DEBUG=use:xyz pnpm dev
const DEBUG_USE_BUNDLE_VISUALIZER = debug("use:bundleVisualizer");
const DEBUG_USE_INSPECT = debug("use:inspect");
const DEBUG_USE_HTTPS = debug("use:https");
const DEBUG_USE_HOST = debug("use:host");

const TAURI_DEV_HOST = process.env.TAURI_DEV_HOST;

export default defineProject({
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: "../../tests/setup.ts",
  },
  root: "src",
  // prevent vite from obscuring rust errors
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    host: TAURI_DEV_HOST || DEBUG_USE_HOST.enabled,
    hmr: TAURI_DEV_HOST
      ? {
          protocol: "ws",
          host: TAURI_DEV_HOST,
          port: 1421,
        }
      : undefined,
    watch: {
      ignored: ["**/src-tauri/**"],
    },
  },
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ["VITE_", "TAURI_"],
  preview: {
    port: 8008,
  },
  build: {
    outDir: "../dist",
    sourcemap: true,
    target: "es2020",
    minify: "terser",
    terserOptions: {
      mangle: true,
      compress: true,
      keep_classnames: false,
      keep_fnames: false,
      sourceMap: true,
    },
  },
  plugins: [
    // CSS-in-JS plugin to cascade styles.
    pigment({
      theme: extendTheme({
        colorSchemes: {
          light: {
            palette: {
              background: "0 0% 100%",
              foreground: "240 10% 3.9%",
              primary: "240 5.9% 10%",
              border: "240 5.9% 90%",
            },
          },
          dark: {
            palette: {
              background: "240 10% 3.9%",
              foreground: "0 0% 80%",
              primary: "0 0% 98%",
              border: "240 3.7% 15.9%",
            },
          },
        },
      }),
    }),

    // Plugin for resolving TypeScript paths.
    // https://github.com/aleclarson/vite-tsconfig-paths#readme
    tsconfigPaths(),

    // Plugin to setup React development.
    react({
      babel: {
        parserOpts: {
          plugins: ["decorators-legacy"],
        },
      },
    }),

    dependencyInjection(),

    // Plugin for chunking strategy.
    // https://vitejs.dev/guide/build.html#chunking-strategy
    splitVendorChunkPlugin(),

    // Plugin that runs TypeScript type checker on a separate process.
    checker({
      enableBuild: true,
      typescript: true,
    }),

    // Plugin to get an untrusted SSL so we can mimic a HTTPS environment.
    DEBUG_USE_HTTPS.enabled ? basicSsl() : false,

    // Plugin to inspect intermediate state of all Vite plugins transformations.
    DEBUG_USE_INSPECT.enabled ? Inspect() : false,

    // Plugin to inspect the final bundle size of a production build.
    DEBUG_USE_BUNDLE_VISUALIZER.enabled
      ? visualizer({
          open: true,
        })
      : false,
  ].filter(Boolean) as PluginOption[],
});
