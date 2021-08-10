import { useState, useMemo } from 'react'

import { callF } from '@Helpers'

export function usePlayAnimation (synEvName, synEvHandler, onAnimationEndHandler) {
  const [play, setPlay] = useState(false)
  const aniProps = useMemo(() => ({
    // es20xx
    [synEvName]: (...args) => {
      setPlay(!play)
      callF(synEvHandler, ...args)
    },
    onAnimationEnd: (...args) => {
      setPlay(false)
      callF(onAnimationEndHandler, ...args)
    },
    // the animation is enabled in css
    playAnimation: play
  }), [onAnimationEndHandler, play, synEvHandler, synEvName])
  return aniProps
}
