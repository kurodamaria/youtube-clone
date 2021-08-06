import styled from 'styled-components'
import { CssIconButton } from '../styles/css-buttons'
import { CssAnimationFadeBorder } from '../styles/css-animations'
import { usePlayAnimation } from '../hooks/usePlayAnimation'

const IconButtonCore = styled.button.attrs(
  {
    animationName: CssAnimationFadeBorder,
    animationDuration: '0.3s'
  }
)`
  ${CssIconButton}
`

export const IconButton = ({ Icon, onClick, className, style }) => {
  const aniProps = usePlayAnimation('onClick', onClick)
  return (
    <IconButtonCore
      className={className}
      style={style}
      {...aniProps}
    >
      <Icon />
    </IconButtonCore>
  )
}
