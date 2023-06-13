import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';
import compress from "astro-compress";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://aritraroy.live',
  integrations: [react(), mdx(), compress(), sitemap()],
  experimental: {
    assets: true
  },
  markdown: {
    shikiConfig: {
      theme: 'min-dark',
      langs: [],
      wrap: true
    }
  },
  compressHTML: true
});