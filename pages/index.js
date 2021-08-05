import Link from 'next/link'
import styled from 'styled-components'

import {
  MdArrowBack,
  MdKeyboardVoice,
  MdMoreVert,
  MdPlaylistAdd,
  MdPlaylistPlay,
  MdWatchLater
} from 'react-icons/md'

import {
  RiVideoAddFill
} from 'react-icons/ri'

import {
  IoMdApps, IoMdNotifications
} from 'react-icons/io'

import { useState } from 'react'

import {
  Header
} from '../components/header'

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
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;

`

const VideoCardCoverImg = styled.img`
`

const MainPageVideos = styled.div`
  border: 1px solid black;
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
    >
      <VideoCardCoverImg src='https://media.tenor.com/images/2a3065163177df2c7108b9c7a670502a/tenor.gif' />
      <VideoInfoContainer>
        <UploaderIcon src='https://i.pinimg.com/originals/3f/71/f3/3f71f31b66328d271e29a6ce09b84b3e.png' />
        <VideoTextInfoContainer>
          <div>WINDOWS 11 - Why I'm switching back to PC from Mac.</div>
          <div>Shirai Kuroko</div>
          <div>342K views·1 hour ago</div>
          <Overlay right='0.2em' top='0.2em' hide={hideOverlays}>
            <MdMoreVert />
          </Overlay>
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
            [...Array(100)].map(() => <VideoCard />)
        }
      </MainPageVideos>
    </div>
  )
}
