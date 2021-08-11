import { css, keyframes } from 'styled-components'

export const CssAnimationFadeBorder = keyframes`
  from {
    box-shadow: inset 0px 0px 0px 0.1em hsl(0, 0%, 90%);
  }
  to {
    box-shadow: inset 0px 0px 0px 0px hsl(0, 0%, 50%);
  }
`

export const CssModalTransition = css`
  transition: opacity 0.2s,
              visibility 0.2s;
`

export const CssUsePlayAnimation = css`
  animation-name: ${props => props.playAnimation ? props.animationName : 'none'};
  animation-duration: ${props => props.playAnimation ? props.animationDuration : 'none'};
`
