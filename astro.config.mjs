import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  experimental: {
    assets: true,
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],
});
