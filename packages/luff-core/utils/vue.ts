export function isComponent(component: any) {
  return unref(component).render
}
