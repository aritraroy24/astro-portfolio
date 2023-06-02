import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';
import compress from "astro-compress"
export default defineConfig({
  integrations: [react(), mdx(), compress()],
  experimental: {
    assets: true
  },
  markdown: {
    shikiConfig: {
      theme: 'min-dark',
      langs: [],
      wrap: true,
    },
  },
  site: 'https://aritraroy.live/',
  compressHTML: true
});