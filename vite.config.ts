import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  // Aliasses
  resolve: {
    alias: {
      "@": "/src",
      "@c": "/src/components",
      "@a": "/src/assets",
      "@s": "/src/assets/styles",
    },
  },
  // Post Css
  css: {
    postcss: {
      plugins: [autoprefixer, postcssPresetEnv],
    },
  },
  // Server
  server: {
    host: true,
  },
});
