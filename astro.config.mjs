// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://FernandoBecerraOrtiz.github.io',
  base: 'DIW_CircoDelSol',
  vite: {
    plugins: [tailwindcss()]
  }
});