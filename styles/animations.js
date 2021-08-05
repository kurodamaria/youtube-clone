import { css, keyframes } from 'styled-components'

/* Animations */
export const CssAnimationFadeBorder = keyframes`
  from {
    box-shadow: inset 0px 0px 0px 0.1em hsl(0, 0%, 90%);
  }
  to {
    box-shadow: inset 0px 0px 0px 0px hsl(0, 0%, 50%);
  }
`

// For play control a animation
// onAnimationStart, onAnimationEnd
// duration should be small, idk, fuck, i can't write this 🙄😰
// avoid directly overwrite this
// Allow me demostrate how to use this shit

/* const [play, setPlay] = useState(play)
<Component playAnimation={play} onAnimationEnd={() => setPlay(false)} .../>
// somewhere in the component
setPlay(true) */

// If your animation is not fast enough, the animation won't play on next trigger
// you can overcome this by
// setPlay(play ? false : true)
// or more confused but shorter version: setPlay(!play)
// but this will cause an useless rerender

export const CssUsePlayAnimation = css`
  animation-name: ${props => props.playAnimation ? props.animationName : 'none'};
  animation-duration: ${props => props.playAnimation ? props.animationDuration : 'none'};
`
