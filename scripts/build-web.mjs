import { cp, mkdir, copyFile } from "node:fs/promises";

await mkdir("www", { recursive: true });
await Promise.all([
  copyFile("index.html", "www/index.html"),
  copyFile("manifest.webmanifest", "www/manifest.webmanifest"),
  copyFile("sw.js", "www/sw.js"),
  cp("icons", "www/icons", { recursive: true })
]);

console.log("FitForge web assets prepared in www/");
