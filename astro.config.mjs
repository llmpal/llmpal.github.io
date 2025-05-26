// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({    
          plugins: [starlightThemeRapide()],
          title: 'PromptR',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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