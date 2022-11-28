import { defineSetupVue3 } from "@histoire/plugin-vue";
import theme from "./dist/theme/flat";

import './dist/theme/index.css'
import './dist/style.css'
import * as PieceUiIcons from "@luff-ui/icon";
import { plugin as Pinceau } from "pinceau/runtime";

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(Pinceau, { theme });
  for (const [key, component] of Object.entries(PieceUiIcons)) {
    app.component(key, component);
  }
});
