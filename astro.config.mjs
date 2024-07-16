import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://radar07.github.io',
  base: '/radar-site',
  integrations: [mdx(), sitemap()]
})
