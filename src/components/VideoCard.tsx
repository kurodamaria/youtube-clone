import styled from "styled-components";
import {UserIcon} from "./UserIcon";
import {Overlay} from "./Overlay";
import {FaYoutube, MdMoreVert, MdPlaylistPlay, MdVideoCall, MdWatchLater} from "react-icons/all";
import {IconContext, IconType} from "react-icons";
import {IconButton} from "./IconButton";
import {ControlledClickable} from "./ControlledClickable";
import React, {createContext, useContext, useState} from "react";
import {Dropdown} from "./Dropdown";
import {Menu, MenuItem} from "./Menu";
import {NavSection} from "./NavSection";
import {Link} from "react-router-dom";

type VideoCardContextT = {
  stop: boolean;
  setStop: React.Dispatch<React.SetStateAction<boolean>>;
}

const VideoCardContext = createContext({} as VideoCardContextT)

export function VideoCard(): JSX.Element {
  const [stop, setStop] = useState(false)
  return (
    <VideoCardContext.Provider value={{stop, setStop}}>
      <Container stop={stop} orientation='row'>
        <ThumbnailContainer>
          <Thumbnail src='/shirai.jpg'/>
          <Overlay top='5px' right='5px' bottom='' left=''>
            <VideoCardHoverAction Icon={MdWatchLater} tip='watch later'/>
            <VideoCardHoverAction Icon={MdPlaylistPlay} tip='add to queue'/>
          </Overlay>
        </ThumbnailContainer>
        <Details/>
      </Container>
    </VideoCardContext.Provider>


  )
}
type ContainerPropsT = {
  orientation: 'column' | 'row';
}
const Container = styled(ControlledClickable)<ContainerPropsT>`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: ${props => props.orientation};
  padding: 0.3em 0.3em;
  border-radius: 0.2em;

  ${Overlay} {
    display: none;
  }

  &:hover ${Overlay} {
    display: block;
  }

  ${Overlay} > * + * {
    margin-top: 0.3em;
  }
`

const ThumbnailContainer = styled.div`
  position: relative;
`

const Thumbnail = styled.img`
  width: 100%;
`

// It's a button
// when clicked, that does something
// when hovered over 0.2s, that shows its tooltip

type VideoCardHoverActionPropsT = {
  Icon: IconType;
  tip: string;
  onClick?: () => void;
}

function VideoCardHoverAction(props: VideoCardHoverActionPropsT) {
  const {setStop} = useContext(VideoCardContext)
  return (
    <VideoCardHoverActionContainer onClick={props.onClick} onMouseUp={() => {
      setStop(false)
    }} onMouseDown={() => {
      setStop(true)
    }}>
      <div>
        <IconContext.Provider value={{size: '1rem', style: {color: 'hsl(0, 0%, 100%)', verticalAlign: 'middle'}}}>
          <props.Icon/>
        </IconContext.Provider>
      </div>
      <span>{props.tip}</span>
    </VideoCardHoverActionContainer>
  )
}

const VideoCardHoverActionContainer = styled.div`
  position: relative;
  display: flex;

  & > div {
    background-color: hsl(0, 0%, 0%);
    width: 1.8rem;
    height: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > span {
    user-select: none;
    position: absolute;
    right: 1.8rem;
    font-size: 0.875rem;
    line-height: 1.8rem;
    letter-spacing: 0.1px;
    padding: 0 0.5em;
    white-space: nowrap;

    background-color: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 100%);
    text-transform: uppercase;
    transform-origin: right center;
    transform: scaleX(0);
    transition: transform 0.2s;
  }

  &:hover > span {
    transition: transform 0.2s 0.5s;
    transform: scaleX(1);
  }
`

type DetailsPropsT = {
  slim?: boolean;
}

function Details({slim = false}: DetailsPropsT): JSX.Element {
  return (
    <DetailsContainer>
      {
        slim ? null
          : <UserIcon>
            <img src='shirai.jpg'/>
          </UserIcon>
      }
      <Meta/>
    </DetailsContainer>
  )
}

const DetailsContainer = styled.div`
  display: flex;

  ${UserIcon} {
    margin-top: 0.75rem;
    margin-right: 0.75rem;
    flex-grow: 0;
    flex-shrink: 0;
  }
`

const MetaContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 1.5rem;

  ${IconButton} {
    height: 2.5rem;
    width: 2.5rem;
    background-color: transparent;
  }
`

function Meta(): JSX.Element {
  const {setStop} = useContext(VideoCardContext)
  return (
    <MetaContainer>
      <MetaTitle title='hello world'>[Akhtar Walk in Tokyo] Moe Moe Kyun Kyun Street Walk ♪ (4K ASMR Nonstop 1 hour
        01 minutes)</MetaTitle>
      <MetaChannelAndViews>
        <div>Channel</div>
        <div>27k views•19 hours ago</div>
      </MetaChannelAndViews>
      <Overlay left='' bottom='' top='8px' right='-1rem'>
        <Dropdown direction='right'>
          <IconButton
            Icon={MdMoreVert}
            iconSize='1.5rem'
            onMouseDown={() => {
              setStop(true)
            }}
            onMouseUp={() => {
              setStop(false)
            }}
          />
          <IconContext.Provider value={{size: '1rem'}}>
            <Menu>
              <NavSection>
                <Link to='/not-implemented'>
                  <MenuItem Icon={FaYoutube} title='Upload video'/>
                </Link>
                <Link to='/not-implemented'>
                  <MenuItem Icon={FaYoutube} title='Go live'/>
                </Link>
              </NavSection>
            </Menu>
          </IconContext.Provider>
        </Dropdown>
      </Overlay>
    </MetaContainer>
  )
}

const MetaTitle = styled.div`
  font-size: 0.875rem;
  line-height: 1.25em;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
  text-align: start;

  // support for two line overflow with ellipsis like magic :(
  max-height: 2.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const MetaChannelAndViews = styled.div`
  font-size: 0.875rem;
  line-height: 1.25em;
`