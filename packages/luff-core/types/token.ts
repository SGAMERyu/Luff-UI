export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Color = 'primary' | 'success' | 'warning' | 'danger' | 'info' | string
export type Variant = 'light' | 'filled' | 'outline'
export type Target = '_blank' | '_self' | '_top' | '_parent'
export interface Gradient {
  from: string,
  to: string,
  deg: string;
}