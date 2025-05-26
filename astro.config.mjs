// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://llmpal.github.io',
  integrations: [
      starlight({    
          plugins: [starlightThemeRapide()],
          title: 'LLMPal',
          sidebar: [
              {
                  label: 'Prompts',
                  autogenerate: { directory: 'prompts' },
              },
          ],
      }),
	],

  adapter: node({
    mode: 'standalone',
  }),
});