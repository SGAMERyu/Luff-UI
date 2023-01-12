export const badgeTokens = {
  size: {
    badge: {
      dotSize: '8px',
      default: '20px',
      sm: '12px',
      dotSpace: '0 4px'
    },
  },
  radii: {
    badge: '999px'
  }
}

export const badgeUtils = {
  badgeSize: (value: string) => ({
    minWidth: `{size.badge.${value}}`,
    height: `{size.badge.${value}}`
  }),
}
