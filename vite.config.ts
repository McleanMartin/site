// site/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "./",
  
  server: {
    host: "::",
    port: 8080,
    open: true,
  },
  
  plugins: [react()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // Let Vite handle CSS normally - remove custom rollupOptions
  },
});