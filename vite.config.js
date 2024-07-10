import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[react].js",
        chunkFileNames: "[react].js",
        assetFileNames: (assetInfo) => {
          // Check if the asset is a font file
          if (/\.(TTF|ttf|otf)$/i.test(assetInfo.name)) {
            return "[name].[ext]";
          }
          return "[name].[ext]";
        },
      },
    },
  },
  server: {
    mimeTypes: {
      "application/javascript": ["js", "jsx"],
      "text/javascript": ["mjs"],
    },
  },
});
