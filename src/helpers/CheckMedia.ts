export function checkMedia(query: string): boolean {
  return window.matchMedia(query).matches
}
