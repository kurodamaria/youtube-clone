export function RenderIf ({ children, cond }) {
  if (cond) {
    return (<>{children}</>)
  } else {
    return null
  }
}
