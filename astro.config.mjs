// @ts-check
import { defineConfig } from 'astro/config';

// Custom domain is openorcha.io (apex). Because the site is served from the
// domain root, `base` stays "/". If this is ever hosted on a project-pages URL
// instead (e.g. open-orcha.github.io/orcha-website), set `base` to the repo name.
export default defineConfig({
  site: 'https://openorcha.io',
  base: '/',
});
