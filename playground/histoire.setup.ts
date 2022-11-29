import { defineSetupVue3 } from '@histoire/plugin-vue'
import * as PieceUiIcons from '@luff-ui/icon'
import LuffUI from '@luff-ui/core'
import { plugin as Pinceau } from 'pinceau/runtime'

import 'pinceau.css'

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(Pinceau, { theme: {} })
  app.use(LuffUI)
  for (const [key, component] of Object.entries(PieceUiIcons)) {
    app.component(key, component)
  }
})
