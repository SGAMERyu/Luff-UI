import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import Pinceau from 'pinceau/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [HstVue()],
  vite: {
    plugins: [Pinceau({
      configLayers: [resolve(__dirname, 'theme')],
      configFileName: 'tokens.config',
      colorSchemeMode: 'class',
      debug: true
    })]
  },
  setupFile: '/src/histoire.setup.ts',
})
