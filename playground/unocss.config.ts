import { defineConfig, presetUno, transformerDirectives, transformerVariantGroup, presetAttributify } from 'unocss'

export default defineConfig({
    presets: [presetUno(), presetAttributify()],
    transformers: [transformerDirectives(), transformerVariantGroup()],
    shortcuts: {
        'demo-block': 'flex border-1px items-center gap-8px border-gray-2 border-solid p-16px w-max'
    }
})