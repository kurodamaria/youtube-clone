import styled from 'styled-components'

import {
  MdMoreVert,
  MdPlaylistPlay,
  MdWatchLater
} from 'react-icons/md'

import { useState } from 'react'

import {
  Header
} from '../components/Header'
import { CssAnimationFadeBorder, CssUsePlayAnimation } from '../styles/css-animations'
import { usePlayAnimation } from '../hooks/usePlayAnimation'
import { CssClickable } from '../styles/css-buttons'
import { IconButton } from '../components/IconButton'

const UploaderIcon = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  cursor: pointer;
  flex-grow: 0;
  flex-basis: 3em;
  flex-shrink: 0;
  margin-right: 0.5em;
`

const VideoInfoContainer = styled.div`
  display: flex;
  padding: 0.5em 0.5em;
  position: relative;
`

const VideoTextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const VideoCardContainer = styled.div`
  border-radius: 0.2em;
  padding: 0.2em 0.2em;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  ${CssUsePlayAnimation}
  ${CssClickable}
  &:hover {
    background-color: ${props => props.theme.white};
  }
  &:active {
     background-color: ${props => props.theme.white90};
  } 
`

const VideoCardCoverImg = styled.img`
`

const MainPageVideos = styled.div`
  margin: 5em auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, 337px);
  gap: 1em 1em;
  justify-content: center;
`

const Overlay = styled.div`
  position: absolute;
  opacity: 0.8;
  font-size: 1.5rem;
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  display: ${props => props.hide ? 'none' : 'flex'};
`

function VideoCard () {
  const [hideOverlays, setHideOverlays] = useState(true)
  const aniProps = usePlayAnimation('onClick')
  return (
    <VideoCardContainer
      onMouseOver={
        () => {
          setHideOverlays(false)
        }
      }
      onMouseLeave={
        () => {
          setHideOverlays(true)
        }
      }
      animationName={CssAnimationFadeBorder}
      animationDuration='0.3s'
      {...aniProps}
    >
      <VideoCardCoverImg src='https://i.pinimg.com/736x/94/4d/fe/944dfe8fdc7ded8c94b629b1d5785730.jpg' />
      <VideoInfoContainer>
        <UploaderIcon src='https://i.pinimg.com/originals/3f/71/f3/3f71f31b66328d271e29a6ce09b84b3e.png' />
        <VideoTextInfoContainer>
          <div>WINDOWS 11 - Why I'm switching back to PC from Mac.</div>
          <div>Shirai Kuroko</div>
          <div>342K views·1 hour ago</div>
          <IconButton Icon={MdMoreVert} onClick={() => { console.log('handle this shit') }} />
        </VideoTextInfoContainer>
      </VideoInfoContainer>
      <Overlay right='0.2em' top='0.2em' hide={hideOverlays}>
        <div
          style={{ backgroundColor: 'black', color: 'white', padding: '0.2em 0.2em', display: 'flex' }}
          onClick={() => {
            console.log('Add to watch later')
          }}
        >
          <MdWatchLater />
        </div>
      </Overlay>
      <Overlay right='0.2em' top='2em' hide={hideOverlays}>
        <div style={{ backgroundColor: 'black', color: 'white', padding: '0.2em 0.2em', display: 'flex' }}>
          <MdPlaylistPlay />
        </div>
      </Overlay>
    </VideoCardContainer>
  )
}

export default function Home () {
  return (
    <div>
      <Header />
      <MainPageVideos>
        {
            [...Array(10)].map(() => <VideoCard />)
        }
      </MainPageVideos>
    </div>
  )
}
