import { defineTheme } from 'pinceau'
import commonTheme from './common'
import defu from 'defu'
import { lightTheme } from './light-theme'

const theme = defu(commonTheme, lightTheme)

export default defineTheme(theme)