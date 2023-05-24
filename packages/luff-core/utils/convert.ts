import { TinyColor } from '@ctrl/tinycolor'    

export function convertColor(color: string) {
  const _color = new TinyColor(color)
  return {
    toRgbArray: () => {
      const { r, g, b } = _color.toRgb()
      return [r, g, b]
    }
  }
}