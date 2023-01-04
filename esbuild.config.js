#!/usr/bin/env node

var watch = process.argv.includes("--watch");

require("esbuild")
  .build({
    entryPoints: ["app/javascript/application.js"],
    bundle: true,
    outfile: "app/assets/builds/application.js",
    plugins: [require("esbuild-svelte")()],
    logLevel: "info",
    watch: watch,
  })
  .catch(() => process.exit(1));
