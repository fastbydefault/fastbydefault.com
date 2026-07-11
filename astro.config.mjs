import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://fastbydefault.com",
  integrations: [sitemap()],
  image: {
    // Allow the book cover to be optimized through Astro's image pipeline at build time.
    remotePatterns: [{ protocol: "https", hostname: "images.manning.com" }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
