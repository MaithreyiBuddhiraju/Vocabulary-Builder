import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// GitHub Pages serves this repo at /Vocabulary-Builder/, so all asset URLs
// (including the PWA manifest/start_url) need that base path.
const base = "/Vocabulary-Builder/";

export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icon.svg"],
      manifest: {
        name: "Lexicon — Vocabulary Game",
        short_name: "Lexicon",
        description: "Build a GRE-level vocabulary with daily words, a browsable library, and quizzes.",
        theme_color: "#8a3a2e",
        background_color: "#e9dec9",
        display: "standalone",
        start_url: base,
        scope: base,
        icons: [
          { src: "icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png" },
          { src: "icon-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      },
      workbox: {
        // Word data + audio are local-only, so precache everything for full offline use.
        globPatterns: ["**/*.{js,css,html,svg,png,woff2}"],
      },
    }),
  ],
});
