import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://belvancy.com',
  integrations: [sitemap()],
});
