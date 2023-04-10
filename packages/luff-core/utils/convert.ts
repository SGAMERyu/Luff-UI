export function convertToRGB(color: string) {
  // If color starts with “#”, execute the following code block
  if (color[0] === '#') {
    // If color is 3 digits, repeat each character
    if (color.length === 4) {
      color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3]
    }

    // Convert color to decimal number
    return [parseInt(color.slice(1, 3), 16), parseInt(color.slice(3, 5), 16), parseInt(color.slice(5, 7), 16)]
  }

  // If color starts with “rgb”, execute the following code block
  if (color.startsWith('rgb')) {
    // Take out the three numbers in rgb
    const [r, g, b] = color.match(/\d+/g)!
    return [parseInt(r), parseInt(g), parseInt(b)]
  }

  // If color starts with “hsl”, execute the following code block
  if (color.startsWith('hsl')) {
    // Take out the three numbers in hsl
    const [h, s, l] = color.match(/\d+/g)!

    // Convert hsl to rgb
    const c = (1 - Math.abs(2 * parseInt(l) / 100 - 1)) * parseInt(s) / 100
    const x = c * (1 - Math.abs(((parseInt(h) / 60) % 2) - 1))
    const m = parseInt(l) / 100 - c / 2

    let r = 0
    let g = 0
    let b = 0

    if (0 <= parseInt(h) && parseInt(h) < 60) {
      r = c
      g = x
      b = 0
    } else if (60 <= parseInt(h) && parseInt(h) < 120) {
      r = x
      g = c
      b = 0
    } else if (120 <= parseInt(h) && parseInt(h) < 180) {
      r = 0
      g = c
      b = x
    } else if (180 <= parseInt(h) && parseInt(h) < 240) {
      r = 0
      g = x
      b = c
    } else if (240 <= parseInt(h) && parseInt(h) < 300) {
      r = x
      g = 0
      b = c
    } else if (300 <= parseInt(h) && parseInt(h) < 360) {
      r = c
      g = 0
      b = x
    }

    return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)]
  }
}
