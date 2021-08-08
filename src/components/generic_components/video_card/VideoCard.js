import styled from 'styled-components'

import { CssAnimationFadeBorder, CssClickable, CssContainer, CssText, CssUsePlayAnimation } from '@Styles'
import { usePlayAnimation } from '@Hooks'
import { IconButton } from '@GCompo'
import { MdDehaze } from 'react-icons/md'

const VideoCardContainer = styled.div`
  ${CssContainer}
  ${CssClickable}
  ${CssUsePlayAnimation}
  animation-duration: 0.2s;
  display: flex;
  padding: 0.3em 0.3em;
  border-radius: 0.2em;
  position: relative;
  &:hover {
    background-color: ${props => props.theme.white};
  }
  &:active {
     background-color: ${props => props.theme.white90};
  } 
`

const ColFlex = styled.div`
  ${CssContainer}
  display: flex;
  flex-direction: column;
  background-color: transparent;
  ${CssText}
`
const RowFlex = styled.div`
  ${CssContainer}
  display: flex;
  flex-direction: row;
  background-color: transparent;
  ${CssText}
`

const Overlay = styled.div`
  ${CssClickable}
  ${CssUsePlayAnimation}
  animation-duration: 0.2s;
  position: absolute;
  background-color: transparent;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

// orientation is one of the four [row, column, row-reversed, column-reversed]
// by default it's column
export const VideoCard = ({ orientation = 'column' }) => {
  const aniProps = usePlayAnimation('onClick', () => { console.log('clicked the container') })
  return (
    <VideoCardContainer
      direction={orientation}
      animationName={CssAnimationFadeBorder}
      {...aniProps}
      onFocus={() => {
        console.log('focused VideoCardContainer and play the fucking transition')
      }}
    >
      <ColFlex>
        <img src='/shirai.gif' width='100%' />
        <RowFlex>
          <ColFlex>
            <div>HoneyComeBear - 悪天 (Official Video) - From "HappyEND</div>
            <div>ハニカムベアー </div>
            <div>2.8k views·1 hour ago</div>
          </ColFlex>
          <ColFlex fontSize='2rem'>
            <IconButton
              Icon={MdDehaze}
              onClick={(ev) => {
                console.log(ev.stopPropagation())
              }}
              onFocus={(ev) => {
                console.log('fucking focused on the icon button, stop the fucking propagation')
                console.log(ev.stopPropagation())
              }}
            />
          </ColFlex>
        </RowFlex>
      </ColFlex>
    </VideoCardContainer>
  )
}
