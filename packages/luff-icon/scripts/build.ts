import { build } from 'esbuild'
import esbuildVue from 'unplugin-vue/esbuild'
import { resolve } from 'path'
import type { BuildOptions, Format } from 'esbuild'
import consola from 'consola'
import chalk from 'chalk'

const componentIndex = resolve(process.cwd(), 'src/components/index.ts')
const outputPath = resolve(process.cwd(), 'dist')

function getBuildOptions(format: Format): BuildOptions {
  return {
    entryPoints: [componentIndex],
    target: 'es2020',
    platform: 'neutral',
    plugins: [
      esbuildVue({
        isProduction: true
      })
    ],
    bundle: true,
    format,
    minifySyntax: true,
    outdir: outputPath,
    external: ['vue']
  }
}

async function buildBundle() {
  await Promise.all([
    build({
      ...getBuildOptions('esm'),
      entryNames: `[name]`
    }),
    build({
        ...getBuildOptions('cjs'),
        entryNames: `[name]`,
        outExtension: { '.js': '.cjs' },
      })
  ])
}

consola.info(chalk.blue('start bundle icon'))
await buildBundle()
consola.info(chalk.green('bundle icon is success'))
