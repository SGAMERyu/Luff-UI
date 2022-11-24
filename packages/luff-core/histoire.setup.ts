import { defineSetupVue3 } from "@histoire/plugin-vue";
import theme from "./node_modules/.vite/pinceau/flat";

import * as PieceUiIcons from "@luff-ui/icon";
import { plugin as Pinceau } from "pinceau/runtime";

export const setupVue3 = defineSetupVue3(({ app }) => {
  console.log(theme)
  app.use(Pinceau, { theme });
  for (const [key, component] of Object.entries(PieceUiIcons)) {
    app.component(key, component);
  }
});
