import type { ConfigTokens, PinceauTokens } from "pinceau";
import { blue, red, gray, green, yellow, indigo } from "./colors";

const lightTheme: ConfigTokens & PinceauTokens = {
  color: {
    // token color
    indigo,
    yellow,
    green,
    blue,
    red,
    gray,
   
    textDisabled: "#9DA7BE",
    disabled: "#edf0f8",
  },
};

export default lightTheme;
