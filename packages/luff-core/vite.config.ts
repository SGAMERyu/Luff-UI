/// <reference types="histoire" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Dts from 'vite-plugin-dts'
import AutoImport from 'unplugin-auto-import/vite'
import Pinceau from 'pinceau/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  logLevel: 'info',
  plugins: [
    Pinceau({
      configLayers: [resolve(__dirname, 'theme')],
      configFileName: 'tokens.config',
      colorSchemeMode: 'class',
      debug: true
    }),
    // Dts(),
    VueMacros({
      plugins: {
        vue: vue()
      }
    }),
    AutoImport({
      dts: true,
      imports: ['vue', '@vueuse/core']
    }),
    // Inspect({
    //   build: true
    // })
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
