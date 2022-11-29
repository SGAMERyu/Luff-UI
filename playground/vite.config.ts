/// <reference types="histoire" />

import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Pinceau from 'pinceau/vite'

export default defineConfig({
  plugins: [
    Pinceau({
      configOrPaths: [resolve(__dirname, 'src')],
      configFileName: 'tokens.config',
      colorSchemeMode: 'class',
      debug: true
    }),
    vue(),
    AutoImport({
      imports: ['vue']
    })
  ],
  histoire: {
    setupFile: 'histoire.setup.ts'
  }
})
