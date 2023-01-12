const SIZES = ['xs', 'sm', 'md', 'lg', 'xl']

export function generateThemeToSize(sizes: number[]) {
  const sizeMap: Record<string, { value: string }> = {}
  sizes.forEach((size, index) => {
    Reflect.set(sizeMap, `${SIZES[index]}`,`${size}px`)
  })
  return sizeMap
}

export function palette(
  color: string,
  suffixes: Array<string | number> = [100, 200, 300, 400, 500, 600, 700, 800, 900]
) {
  const colorRange: {
    [x: number]: {
      initial: string
    }
  } = {}

  suffixes.forEach((range) => {
    Reflect.set(colorRange, range, {
      initial: `{color.${color}.${range}}`,
      dark: `{color.${color}.${range}}`
    })
  })

  return colorRange
}
