/// <reference types="histoire" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Dts from 'vite-plugin-dts'
import DefineOptions from 'unplugin-vue-define-options/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Pinceau from 'pinceau/vite'

export default defineConfig({
  logLevel: 'info',
  plugins: [
    Pinceau({
      configOrPaths: [resolve(__dirname, 'theme')],
      configFileName: 'tokens.config',
      colorSchemeMode: 'class'
    }),
    vue(),
    // Dts(),
    DefineOptions(),
    AutoImport({
      dts: true,
      imports: ['vue']
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
      name: 'PieceUI'
    },
    commonjsOptions: {
      transformMixedEsModules: true
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  histoire: {
    setupFile: 'histoire.setup.ts'
  }
})
