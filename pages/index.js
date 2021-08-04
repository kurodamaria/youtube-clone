import Link from 'next/link'
import styled from 'styled-components'
import {
  FaSearch,
  FaYoutube,
  FaBars,
  FaUserCircle
} from 'react-icons/fa'

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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 0em 0.3em;
  border: 1px solid black;
  position: fixed;
  top: 0;
`

const HeaderLeft = styled.div`
  display: flex;
  flex-grow: 0;
`

const HeaderCenter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  padding: 0.4em 0em;
  max-width: 600px;
  z-index: ${props => props.zIndex};
`

const HeaderRight = styled.div`
  display: flex;
  flex-grow: 0;
`

const IconWrapper = styled.a`
  padding: 0.2em 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const IconWrapperShowOnMaxWidth = styled(IconWrapper)`
  display: none;
  @media (max-width: ${props => props.mqMaxWidth}) {
    display: flex;
  }
`

const SearchInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
  padding: 0.2em 1em;
  font-size: 1rem;
`

const SearchButton = styled.button.attrs({ type: 'submit' })`
  background-color: transparent;
  border: 1px solid gray;
  padding: 0.4em 1.5em;
  cursor: pointer;
`

const Form = styled.form.attrs({ action: '/result' })`
  @media (max-width: 656px) {
    display: ${props => props.noMediaQuery ? 'flex' : 'none'};
  }
  display: flex;
  flex-grow: 1;
  margin-left: 1.5em;
`

const SearchBar = ({ noMediaQuery = true }) =>
  <Form noMediaQuery={noMediaQuery}>
    <SearchInput />
    <SearchButton>
      <FaSearch />
    </SearchButton>
  </Form>

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
  const [renderSeachBar, setRenderSearchBar] = useState(false)
  if (renderSeachBar) {
    return (
      <>
        <Header>
          <IconWrapper>
            <MdArrowBack onClick={
                (e) => {
                  e.preventDefault()
                  setRenderSearchBar(false)
                }
              }
            />
          </IconWrapper>
          <SearchBar />
        </Header>
      </>
    )
  }
  return (
    <div>
      <Header>
        <HeaderLeft>
          <IconWrapper>
            <FaBars />
          </IconWrapper>
          <IconWrapper>
            <FaYoutube style={{ fontSize: '1.2em' }} />AnimeTube
          </IconWrapper>
        </HeaderLeft>
        <HeaderCenter>
          <SearchBar noMediaQuery={false} />
          <IconWrapperShowOnMaxWidth mqMaxWidth='656px'>
            <FaSearch onClick={
                (e) => {
                  e.preventDefault()
                  setRenderSearchBar(true)
                }
              }
            />
          </IconWrapperShowOnMaxWidth>
          <IconWrapper>
            <MdKeyboardVoice />
          </IconWrapper>
        </HeaderCenter>
        <HeaderRight>
          <IconWrapper>
            <RiVideoAddFill />
          </IconWrapper>
          <IconWrapper>
            <IoMdApps />
          </IconWrapper>
          <IconWrapper>
            <IoMdNotifications />
          </IconWrapper>
          <IconWrapper>
            <FaUserCircle />
          </IconWrapper>
        </HeaderRight>
      </Header>
      <MainPageVideos>
        {
            [...Array(100)].map(() => <VideoCard />)
          }
      </MainPageVideos>
    </div>
  )
}
