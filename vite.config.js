import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/reactrouter/",
  server: {
    open: true,
  },
  // Added the following line
  navigateFallbackRoot: "/reactrouter/index.html",
});
