const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true
  },
  globals: {
    defineOptions: 'writable',
    $variantsProps: 'writable'
  },
  plugins: ['@typescript-eslint', 'promise', 'prettier', 'unicorn'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.ts', '.tsx', '.d.ts', '.js'] },
      typescript: {
        alwaysTryTypes: true
      }
    },
    'import/order': [
      'error',
      {
        // 依赖排序 内置依赖，外部模块 内置依赖，兄弟依赖 父节点依赖 index文件依赖，未知依赖
        groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index', 'unknown'],
        pathGroups: [
          {
            pattern: 'vue*',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after'
          }
        ]
      }
    ],
    'newlines-between': 'always',
    alphabetize: {
      order: 'asc',
      caseInsensitive: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-undef': 'off'
  }
})
