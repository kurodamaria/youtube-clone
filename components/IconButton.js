import styled from 'styled-components'
import { CssIconButton } from '../styles/buttons'
import { CssAnimationFadeBorder } from '../styles/animations'
import { usePlayAnimation } from '../hooks/usePlayAnimation'

const IconButtonCore = styled.button.attrs(
  {
    animationName: CssAnimationFadeBorder,
    animationDuration: '0.3s'
  }
)`
  ${CssIconButton}
`

export const IconButton = ({ Icon, onClick }) => {
  const aniProps = usePlayAnimation('onClick', onClick)
  return (
    <IconButtonCore
      {...aniProps}
    >
      <Icon />
    </IconButtonCore>
  )
}
