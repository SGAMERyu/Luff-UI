import { createVueSFC } from 'sfc-composer'
import { upperFirst, lowerFirst } from 'scule'
import path from 'node:path'
import { ensureDir, writeFile } from 'fs-extra'

function createComponentSFC(name: string) {
  const componentName = upperFirst(name)
  const styleName = lowerFirst(name)
  const sfc = createVueSFC({
    template: {
      content: `<div>${componentName}</div>`
    },
    scriptSetup: {
      lang: 'ts',
      content: `defineOptions({ name: "Lu${componentName}" })`
    },
    styles: [
      {
        lang: 'ts',
        content: `css({variants: {},'.lu-${styleName}': {}})`
      }
    ]
  })

  return sfc.toString()
}

function createComponentStory(name: string) {
  const componentName = upperFirst(name)
  const sfc = createVueSFC({
    template: {
      content: `<Story 
        title="${componentName}" 
        :layout="{
          type: 'grid'
        }">
          <Variant></Variant>
      </Story>`
    },
    scriptSetup: {
      lang: 'ts',
      content: `import Lu${componentName} from '../src/${upperFirst(name)}.vue'`
    }
  })
  return sfc.toString()
}

function createMain(name: string) {
  name = upperFirst(name)
  return `
    import { withInstall } from '~/utils'
    import ${name} from './src/${name}.vue'

    export const Lu${name} = withInstall(${name})
    export default Lu${name}

    export * from './src/${lowerFirst(name)}.type'
  `
}

function createComponentType(name: string) {
  const upperName = upperFirst(name)
  const lowerNameProps = `${lowerFirst(name)}Props`
  const upperNameProps = `${upperName}Props`
  const upperNameInstance = `${upperName}Instance`
  return `import { ExtractPropTypes, PropType } from 'vue'
  export const ${lowerNameProps} = {}

  export type ${upperNameProps} = ExtractPropTypes<typeof ${lowerNameProps}>
  export type ${upperNameInstance} =  InstanceType<typeof ${upperName}>
  `
}

async function generateTemplateFromComponentDirPath(componentDirPath: string, componentName: string) {
  await ensureDir(path.resolve(componentDirPath, 'src'))
  await ensureDir(path.resolve(componentDirPath, 'story'))
  const sfcTemplatePath = path.resolve(componentDirPath, `src/${upperFirst(componentName)}.vue`)
  const mainTemplatePath = path.resolve(componentDirPath, 'index.ts')
  const typeTemplatePath = path.resolve(componentDirPath, `src/${componentName}.type.ts`)
  const storyTemplatePath = path.resolve(componentDirPath, `story/${componentName}.story.vue`)

  await writeFile(mainTemplatePath, createMain(componentName))
  await writeFile(sfcTemplatePath, createComponentSFC(componentName))
  await writeFile(typeTemplatePath, createComponentType(componentName))
  await writeFile(storyTemplatePath, createComponentStory(componentName))
}

async function generateComponent() {
  try {
    const componentName = process.argv[2].toLocaleLowerCase()
    const componentDir = path.resolve(process.cwd(), `packages/luff-core/components/${componentName}`)
    const componentDirPath = (await ensureDir(componentDir)) as string | undefined
    if (componentDirPath) {
      await generateTemplateFromComponentDirPath(componentDirPath, componentName)
      console.log('create component dir is success')
    } else {
      console.log('component is exist')
    }
  } catch (err) {
    console.log(err)
  }
}

generateComponent()
