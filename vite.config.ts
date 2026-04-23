import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoBase = `/${process.env.GITHUB_REPOSITORY?.split("/")[1] || "data_analysis_portfolio"}/`;

export default defineConfig(({ mode }) => ({
  // Use the repository name as base path on GitHub Pages project sites.
  base: process.env.VITE_BASE_PATH || (isGithubActions ? repoBase : "/"),
  server: {
    host: "::",
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
