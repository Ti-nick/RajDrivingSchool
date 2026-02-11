import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "/RajDrivingSchool/",       // 👈 IMPORTANT: repo name
  build: {
    outDir: "docs",                 // 👈 so Pages can serve it
    emptyOutDir: true
  }
});