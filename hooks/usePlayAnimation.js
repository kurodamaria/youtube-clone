import {
  useState,
  useMemo
} from 'react'

import {
  callF
} from '../helpers/conditional-invoke'

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
    playAnimation: play
  }), [onAnimationEndHandler, play, synEvHandler, synEvName])
  return aniProps
}
