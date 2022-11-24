import { LuffButton } from "~/button";
import { createInstaller } from "./utils";
import type { Plugin } from "vue";

const components: Plugin[] = [LuffButton];

const installPieceUi = createInstaller(components);

export default installPieceUi;
