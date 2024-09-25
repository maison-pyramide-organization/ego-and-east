import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
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
