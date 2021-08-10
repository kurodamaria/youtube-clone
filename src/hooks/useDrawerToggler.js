import { GlobalContext } from '@Context'
import { useCallback, useContext } from 'react'

export function useDrawerToggler () {
  const { expandedDrawer } = useContext(GlobalContext)
  const togger = useCallback(() => {
    // You know what may be switch to switch statement will make this more clear, but it's so many typing
    if (window.innerWidth < 1329) {
      console.log('on width < 1329px')
      if (expandedDrawer.hide === false) {
        if (expandedDrawer.disableMq) {
          console.log(' > yes, hide but not enable media query')
          expandedDrawer.setHide(true)
        } else {
          console.log(' > hide through media query')
          expandedDrawer.setHide(undefined)
        }
      } else {
        console.log('> show and disable media query')
        expandedDrawer.setHide(false)
      }
    } else {
      console.log('on width >= 1329px')
      if (expandedDrawer.hide === undefined) {
        console.log('> disable media control till next click')
        expandedDrawer.setHide(true)
        expandedDrawer.setDisableMq(true) // tell the < 1329 side to not enable media query
      } else {
        console.log('> enable media query')
        expandedDrawer.setHide(undefined)
        expandedDrawer.setDisableMq(false) // tell the < 1329 side it's ok to relay on media query
      }
    }
    console.log(window.innerWidth, expandedDrawer.hide, expandedDrawer.disableMq)
  }, [expandedDrawer])

  return togger
}
