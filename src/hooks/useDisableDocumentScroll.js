import { useEffect } from 'react'

let scrollY = 0
export function useDisableDocumentScroll (shouldDisable) {
  useEffect(() => {
    if (shouldDisable) {
      // get the current scroll in pixel
      scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.overflowY = 'scroll'
      document.body.style.left = '0px'
      document.body.style.right = '0px'
      document.body.style.bottom = '0px'
      document.body.style.top = `${-scrollY}px`
    } else {
      document.body.style.position = 'static'
      document.body.style.overflowY = 'auto'
      window.scroll(0, scrollY)
    }
  }, [shouldDisable])
}
