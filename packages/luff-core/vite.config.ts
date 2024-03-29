/// <reference types="histoire" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Dts from 'vite-plugin-dts'
import AutoImport from 'unplugin-auto-import/vite'
import Pinceau from 'pinceau/vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  logLevel: 'info',
  plugins: [
    Vue(),
    Pinceau({
      configLayers: [resolve(__dirname, 'theme')],
      configFileName: 'tokens.config',
      colorSchemeMode: 'class',
      debug: true
    }),
    // Dts(),
    AutoImport({
      dts: true,
      imports: ['vue', '@vueuse/core'],
      dirs: ['./hook']
    }),
    Inspect({
      build: true
    })
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve(__dirname)
      }
    ]
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'LuffUI',
      fileName: 'LuffUI'
    },
    commonjsOptions: {
      transformMixedEsModules: true
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', '@luff-ui/icon'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
