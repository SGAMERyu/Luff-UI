import { defineTheme } from 'pinceau'
import commonTheme from './common'
import lightTheme from './light-theme'
import defu from 'defu'

const theme = defu(commonTheme, lightTheme)

export default defineTheme(theme)
