import { Fn } from '@vueuse/core'
import { ColorPickerFormat } from './colorPicker.type'
import { ColorInput, TinyColor } from '@ctrl/tinycolor'

export interface ColorValue {
  h: number
  s: number
  v: number
  a: number
}

const COLOR_FORMATS: Record<ColorPickerFormat, string> = {
  hex: 'toHexString',
  hexa: 'toHex8String',
  rgba: 'toRgbString',
  rgb: 'toRgbString',
  hsl: 'toHslString',
  hsla: 'toHslString'
}

export function parseColorValue(color: string): ColorValue {
  if (typeof color !== 'string') {
    return { h: 0, s: 0, v: 0, a: 1 }
  }

  if (color === 'transparent') {
    return { h: 0, s: 0, v: 0, a: 1 }
  }

  const _color = new TinyColor(color)

  if (!_color.isValid) {
    return { h: 0, s: 0, v: 0, a: 1 }
  }

  return _color.toHsv()
}

export function convertColorFromFormat(color: ColorInput, format: ColorPickerFormat) {
  const _color = new TinyColor(color)
  const formatFn = COLOR_FORMATS[format]
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return _color[formatFn]()
}
