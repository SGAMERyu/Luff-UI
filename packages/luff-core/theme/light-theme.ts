import type { DefineConfigType } from "pinceau";
import { blue, red, gray, green, yellow, indigo } from "./colors";
import commonTheme from './common'
import defu from 'defu'

export const lightThemeToken: DefineConfigType = {
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

export const lightTheme: DefineConfigType = defu(commonTheme, lightThemeToken)