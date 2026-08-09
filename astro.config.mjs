// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { SITE } from './src/consts.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  build: {
    // Jekyll 時代の URL（例: /news, /sessions）を .html 付きにせず
    // ディレクトリ + index.html で出力し、既存 URL をそのまま維持する
    format: 'directory',
  },
});
