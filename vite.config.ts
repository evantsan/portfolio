import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // ────────────────────────────────────────────────────────────
  // IMPORTANT — GitHub Pages configuration
  // ────────────────────────────────────────────────────────────
  // This must match your repository name exactly, wrapped in slashes.
  //
  // Example: if you will visit your site at
  //   https://yourusername.github.io/portfolio
  // then your repository is named "portfolio", so this should be:
  //   base: "/portfolio/",
  // ------------------------------
  // If you are deploying to a *user* site instead (a repo literally named
  // "yourusername.github.io", served at the root with no subfolder),
  // set this to "/" instead.
  base: "/",
});
