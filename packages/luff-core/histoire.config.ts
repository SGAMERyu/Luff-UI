import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import Pinceau from 'pinceau/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [HstVue()],
  setupFile: 'histoire.setup.ts'
})
