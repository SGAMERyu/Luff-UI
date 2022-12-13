import { readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import { ensureDir, emptydir } from "fs-extra";
import glob from "fast-glob";
import consola from "consola";
import chalk from "chalk";
import { pascalCase } from "scule";
import { parse, resolve } from "path";

interface SvgFile {
  svgContent: string;
  svgName: string;
}

const componentDir = resolve(process.cwd(), "src/components");
const componentEntry = resolve(componentDir, "index.ts");

async function getSvgFiles() {
  const svgFileList: SvgFile[] = [];
  const svgPaths = await glob("icons/**/*.svg", {
    absolute: true,
    caseSensitiveMatch: false,
  });
  const svgSet = new Set()
  svgPaths.forEach(async (path) => {
    const svgContent = await readFile(path, "utf-8")
    const svgName = getSvgName(path);
    if (!svgSet.has(svgName.toLocaleLowerCase())) {
      svgSet.add(svgName.toLocaleLowerCase())
      const vueComponent = transformSvgToVueTemplate(svgName, svgContent);
      svgFileList.push({ svgContent: vueComponent, svgName });
    }
  });
  return svgFileList;
}

function getSvgName(svgPath: string) {
  return "Lu" + pascalCase(parse(svgPath).name);
}

function transformSvgToVueTemplate(componentName: string, content: string) {
  return `<template>
  ${content}
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "${componentName}"
})
</script>
`;
}

async function bootstrap() {
  const svgFileList = await getSvgFiles();
  const exportList: string[] = [];
  await ensureDir(componentDir);
  await emptydir(componentDir);
  for (const { svgContent, svgName } of svgFileList) {
    const componentPath = resolve(componentDir, `${svgName}.vue`);
    const isExistsFile = await existsSync(componentPath);
    if (isExistsFile) continue;
    await writeFile(componentPath, svgContent, "utf-8");
    exportList.push(
      `export { default as ${pascalCase(svgName)} } from './${svgName}.vue'`
    );
  }
  await writeFile(componentEntry, exportList.join("\n"), "utf-8");
}

consola.info(chalk.blue("start generate svg file"));
await bootstrap();
consola.info(chalk.green("generate svg vue component success"));
