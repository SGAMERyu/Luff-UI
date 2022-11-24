/// <reference types="histoire" />

import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import DefineOptions from "unplugin-vue-define-options/vite";
import AutoImport from "unplugin-auto-import/vite";
import Pinceau from "pinceau/vite";
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  logLevel: 'info',
  plugins: [
    Pinceau({
      configOrPaths: [resolve(__dirname, 'theme')],
      configFileName: 'tokens.config',
      debug: true,
      colorSchemeMode: 'class'
    }),
    vue(),
    // Dts(),
    DefineOptions(),
    AutoImport({
      dts: true,
      imports: ['vue']
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
      name: 'LuffUI'
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

