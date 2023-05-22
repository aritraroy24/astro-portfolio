import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [react(), mdx()],
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
  site: 'https://valid-rss-hosted-styled.netlify.app/'
});