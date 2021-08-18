import {useEffect, useRef} from 'react'

export function useDisableBodyScroll (disable: boolean) {
  const scrollYBeforeDisable = useRef<number>(0)
  useEffect(() => {
    if (disable) {
      scrollYBeforeDisable.current = window.scrollY
      // get the current scroll in pixel
      document.body.style.position = 'fixed'
      document.body.style.overflowY = 'scroll'
      document.body.style.left = '0px'
      document.body.style.right = '0px'
      document.body.style.bottom = '0px'
      document.body.style.top = `${-scrollYBeforeDisable.current}px`
    } else {
      document.body.style.position = 'static'
      document.body.style.overflowY = 'auto'
      window.scroll(0, scrollYBeforeDisable.current)
    }

  }, [disable])
}