import styled, { css } from 'styled-components'

import { CssIconButton, CssAnimationFadeBorder } from '@Styles'
import { usePlayAnimation } from '@Hooks'

const IconButtonCore = styled.button`
  ${CssIconButton}
  ${
    props => props.playAnimation ? css`animation-name: ${CssAnimationFadeBorder};` : ''
  }
  animation-duration: 0.3s;
`

const IconButton = ({ Icon, onClick, onFocus, className, style }) => {
  const aniProps = usePlayAnimation('onClick', onClick)
  return (
    <IconButtonCore
      className={className}
      style={style}
      {...aniProps}
      onFocus={onFocus}
    >
      <Icon />
    </IconButtonCore>
  )
}
export { IconButton }

// Animation won't work
//
// const IconButtonCore = ({ Icon, onClick, className }) => {
//   const aniProps = usePlayAnimation('onClick', onClick)
//   return (
//     <button
//       className={className}
//       {...aniProps}
//     >
//       <Icon />
//     </button>
//   )
// }

// export const IconButton = styled(IconButtonCore)`
//   ${CssIconButton}
//   ${
//     props => props.playAnimation ? css`animation-name: ${CssAnimationFadeBorder};` : ''
//   }
//   animation-duration: 0.3s;
// `
