import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import react from '@astrojs/react';
import markdownConfig from './markdown.config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://mikekeb.github.io',
  base: '/my-portfolio',
  prefetch: true,
  markdown: {
    ...markdownConfig,
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    compress(),
    react(),
    mdx({
      ...markdownConfig,
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'one-dark-pro',
      },
    }),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    robotsTxt({
      sitemap: [
        'https://mikekeb.github.io/sitemap-0.xml',
        'https://mikekeb.github.io/sitemap-index.xml',
      ],
    }),
  ],
  // output: "server",
  // adapter: vercel({
  //   webAnalytics: {
  //     enabled: true
  //   },
  //   speedInsights: {
  //     enabled: true
  //   },
  //   imageService: true
  // })
});
