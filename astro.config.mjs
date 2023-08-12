// config import
import { defineConfig } from 'astro/config';

// integrations import
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import astroExpressiveCode from 'astro-expressive-code'

/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
const astroExpressiveCodeOptions = {
  // Example: Change the theme to "dracula"
  theme: 'min-dark',
}

// https://astro.build/config
export default defineConfig({
  site: 'https://aritraroy.live',
  integrations: [
    react(),
    astroExpressiveCode(astroExpressiveCodeOptions),
    mdx(),
    compress({
      img: false,
    }),
    sitemap()
  ],
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
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
  compressHTML: true
});