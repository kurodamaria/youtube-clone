import styled from "styled-components";
import {UserIcon} from "./UserIcon";
import {Overlay} from "./Overlay";
import {AiOutlineStop, MdFlag, MdMoreVert, MdPlaylistAdd, MdWatchLater} from "react-icons/all";
import {IconContext, IconType} from "react-icons";
import {IconButton} from "./IconButton";
import React, {useContext} from "react";
import {Dropdown} from "./Dropdown";
import {Menu, MenuItem} from "./Menu";
import {NavSection} from "./NavSection";
import {Fetch} from "./Fetch";
import {VideoCardContext} from "../context/VideoCardContext";
import {TransparentLink} from "./TransparentLink";
import {NormalLink} from "./Links";
import {WatchLaterContext} from "../context/WatchLaterContext";

export function VideoCard(): JSX.Element {
  const videoCardContext = useContext(VideoCardContext)
  return (
    <VideoCardContainer to={`/watch/${videoCardContext.videoId}`}>
      <ThumbnailContainer>
        <Thumbnail src={videoCardContext.thumbnail}/>
        <Overlay top='5px' right='5px' bottom='' left=''>
          <VideoCardHoverAction Icon={MdWatchLater}
                                tip='watch later'
                                onClick={(ev) => {
                                  ev.preventDefault()
                                  ev.stopPropagation()
                                }}
          />
        </Overlay>
      </ThumbnailContainer>
      <Details/>
    </VideoCardContainer>
  )
}

function MoreVertOverlay() {
  const watchLaterContext = useContext(WatchLaterContext)
  const videoCardContext = useContext(VideoCardContext)
  return (
    <Overlay left='' bottom='' top='0.3em' right='0'>
      <Dropdown onShow={() => {
      }} onDismiss={() => {
      }}>
        <IconButton
          Icon={MdMoreVert}
          iconSize='1.5rem'
          onMouseDown={(ev) => {
            ev?.stopPropagation()
          }}
          onClick={(ev) => {
            // prevent from redirecting
            ev?.preventDefault()
            ev?.stopPropagation()
          }}
        />
        <IconContext.Provider value={{size: '1.5rem'}}>
          <Menu>
            <NavSection>
              <MenuItem Icon={MdWatchLater}
                        title={watchLaterContext.list.includes(videoCardContext.videoId) ? 'Remove from watch later' : 'Add to watch later'}
                        onClick={() => {
                          if (watchLaterContext.list.includes(videoCardContext.videoId)) {
                            watchLaterContext.setList(watchLaterContext.list.filter(vid => vid !== videoCardContext.videoId))
                          } else {
                            watchLaterContext.setList([...watchLaterContext.list, videoCardContext.videoId])
                          }
                        }}/>
              <MenuItem Icon={MdPlaylistAdd} title='Save to playlist'/>
            </NavSection>
            <hr/>
            <NavSection>
              <MenuItem Icon={AiOutlineStop} title='Not interested'/>
              <MenuItem Icon={AiOutlineStop} title="Don't recommend channel"/>
              <MenuItem Icon={MdFlag} title='Report'/>
            </NavSection>
          </Menu>
        </IconContext.Provider>
      </Dropdown>
    </Overlay>
  )
}

const ThumbnailContainer = styled.div`
  position: relative;
`
const VideoCardContainer = styled(TransparentLink)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 0.3em 0.3em;
  border-radius: 0.2em;

  position: relative;

  ${IconButton} {
    background-color: transparent;
  }

  ${Overlay} {
    z-index: 1;
  }

  ${Overlay}:first-of-type {
    display: none;
  }

  &:hover ${Overlay} {
    display: block;
  }

  ${Overlay} > * + * {
    margin-top: 0.3em;
  }

  ${IconButton} {
    height: 2.5rem;
    width: 2.5rem;
  }
`

const Thumbnail = styled.img`
  width: 100%;
`

type VideoCardHoverActionPropsT = {
  Icon: IconType;
  tip: string;
  onClick?: (() => void) | ((ev: React.MouseEvent<HTMLDivElement>) => void);
}

function VideoCardHoverAction(props: VideoCardHoverActionPropsT) {
  return (
    <VideoCardHoverActionContainer onClick={props.onClick}
                                   onMouseDown={(ev) => {
                                     ev?.stopPropagation()
                                     ev?.preventDefault()
                                   }}
    >
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
  cursor: pointer;

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

const UserIconRender = ({data}: { data: any }) =>
  <UserIcon>
    <img src={data.items[0].snippet.thumbnails.default.url} alt='cover'/>
  </UserIcon>

function Details(): JSX.Element {
  const {channelId} = useContext(VideoCardContext)
  return (
    <DetailsContainer>
      {
        <Fetch
          uri={`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyBUhZ2UBHtNmslXzTUBbLbzvRAjMPfiEjA`}
          Render={UserIconRender}
        />
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
  const {title, channelId, channelTitle} = useContext(VideoCardContext)
  return (
    <MetaContainer>
      <MetaTitle title={title}>{title}</MetaTitle>
      <MetaChannelAndViews>
        <NormalLink to={`/channel/${channelId}`}>{channelTitle}</NormalLink>
        <div>27k views•19 hours ago</div>
      </MetaChannelAndViews>
      <MoreVertOverlay/>
    </MetaContainer>
  )
}

const MetaTitle = styled.div`
  text-align: start;
  margin-top: 0.75em;
  margin-bottom: 0.5em;
  line-height: 1.25em;
  font-size: 0.875rem;
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