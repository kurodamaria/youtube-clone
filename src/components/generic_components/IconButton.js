import styled from 'styled-components'

import { CssIconButton, CssAnimationFadeBorder } from '@Styles'
import { usePlayAnimation } from '@Hooks'

const IconButtonCore = styled.button.attrs(
  {
    animationName: CssAnimationFadeBorder,
    animationDuration: '0.3s'
  }
)`
  ${CssIconButton}
`

export const IconButton = ({ Icon, onClick, onFocus, className, style }) => {
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
