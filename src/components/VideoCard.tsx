import styled from "styled-components";
import {UserIcon} from "./UserIcon";
import {Overlay} from "./Overlay";
import {MdMoreVert, MdWatchLater} from "react-icons/all";
import {IconContext, IconType} from "react-icons";
import {IconButton} from "./IconButton";
import React, {createContext, useContext, useState} from "react";
import {Dropdown} from "./Dropdown";
import {TransparentLink} from "./TransparentLink";
import {NormalLink} from "./Links";
import {ControlledClickable, DisableClickableEffect} from "./ControlledClickable";
import {ControlledOverlayContainer} from "./OverlayContainer";
import {PreventDefaultOnClick} from "./PreventDefaultOnClick";
import {PaddingMargin} from "./PaddingMargin";
import {VideoCardContext} from "../context/VideoCardContext";
import {Fetch} from "./Fetch";
import {category, paramReducer} from "@Helpers";

export function VideoCard(): JSX.Element {
  const [hoveringMaster, setHoveringMaster] = useState(false)
  const [dropdownShowing, setDropdownShowing] = useState(false)
  const {videoId} = useContext(VideoCardContext)
  return (
    <ControlledClickable>
      <MasterContainer onMouseEnter={() => {
        setHoveringMaster(true)
      }}
                       onMouseLeave={() => {
                         setHoveringMaster(false)
                       }
                       }>
        <LinkLayer to={`/watch/${videoId}`}>
          <ContentContainer>
            <ControlledOverlayContainer show={hoveringMaster}>
              <ThumbnailPart/>
              <Overlay top='5px' bottom='' left='' right='5px'>
                <DisableClickableEffect>
                  <PreventDefaultOnClick>
                    <HoverAction Icon={MdWatchLater}
                                 tip='add to watch later'
                    />
                  </PreventDefaultOnClick>
                </DisableClickableEffect>
              </Overlay>
            </ControlledOverlayContainer>
            <ControlledOverlayContainer show={hoveringMaster || dropdownShowing}>
              <DetailsPart/>
              <Overlay left='' bottom='' top='0em' right='-0.5em'>
                <DisableClickableEffect>
                  <PreventDefaultOnClick>
                    <Dropdown onShow={() => {
                      setDropdownShowing(true)
                    }} onDismiss={() => {
                      setDropdownShowing(false)
                    }} zIndex={1}>
                      <IconButton Icon={MdMoreVert} iconSize='1.5rem' padding='0.5em 0.5em'/>
                      <div style={{backgroundColor: 'lightblue', height: '300px', width: '300px'}}>
                        A Dropdown Menu, this should be replaced
                      </div>
                    </Dropdown>
                  </PreventDefaultOnClick>
                </DisableClickableEffect>
              </Overlay>
            </ControlledOverlayContainer>
          </ContentContainer>
        </LinkLayer>
      </MasterContainer>
    </ControlledClickable>
  )
}

const MasterContainer = styled.div`
  // dev props
  // width: 300px;
  // margin: 1em auto;
  // border: 1px solid red;
  // end of dev props
  border-radius: 0.3em;
  position: relative;
`

const LinkLayer = styled(TransparentLink)`
  // dev props
  // border: 1px solid green;
  // end of dev props
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ContentContainer = styled.div`
  // dev props
  // border: 1px solid blue;
  // end of dev props
  flex-grow: 1;
  margin: 0.3em 0.3em;
  display: flex;
  flex-direction: column;
`

function ThumbnailPart() {
  const {thumbnail} = useContext(VideoCardContext)
  return (
    <Thumbnail src={thumbnail}/>
  )
}

const Thumbnail = styled.img`
  width: 100%;
`

type VideoCardHoverActionPropsT = {
  Icon: IconType;
  tip: string;
  onClick?: (() => void) | ((ev: React.MouseEvent<HTMLDivElement>) => void);
}

function HoverAction(props: VideoCardHoverActionPropsT) {
  return (
    <HoverActionMasterContainer onClick={props.onClick}>
      <HoverActionIconContainer>
        <IconContext.Provider value={{size: '1rem', style: {color: 'hsl(0, 0%, 100%)', verticalAlign: 'middle'}}}>
          <props.Icon/>
        </IconContext.Provider>
      </HoverActionIconContainer>
      <HoverActionTip>{props.tip}</HoverActionTip>
    </HoverActionMasterContainer>
  )
}

const HoverActionIconContainer = styled.div`
  background-color: hsl(0, 0%, 0%);
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HoverActionTip = styled.span`
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
`

const HoverActionMasterContainer = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;

  &:hover > ${HoverActionTip} {
    transition: transform 0.2s 0.5s;
    transform: scaleX(1);
  }
`

type ChannelContextT = {
  channelId: string;
  channelTitle: string;
}

const ChannelContext = createContext<ChannelContextT>({} as ChannelContextT)

function DetailsPart(): JSX.Element {
  const {channelId} = useContext(VideoCardContext)
  return (
    <ChannelContext.Provider value={{channelId, channelTitle: 'Shirai Kuroko Daily Life'}}>
      <DetailsMasterContainer>
        <Fetch
          url={category('channels') + paramReducer('id', [channelId]) + paramReducer('part', ['snippet', 'statistics', 'brandingSettings'])}>
          {
            (data: any) =>
              <PaddingMargin margin='0.75rem 0.75rem 0 0'>
                <UserIcon radius='40px' src={data.items[0].snippet.thumbnails.default.url}/>
              </PaddingMargin>
          }
        </Fetch>
        <Meta/>
      </DetailsMasterContainer>
    </ChannelContext.Provider>
  )
}

const DetailsMasterContainer = styled.div`
  display: flex;
`


function Meta(): JSX.Element {
  const {title, channelId} = useContext(VideoCardContext)
  const {channelTitle} = useContext(ChannelContext)
  return (
    <MetaContainer>
      <MetaTitle title={title}>{title}</MetaTitle>
      <MetaChannelAndViews>
        <NormalLink to={`/channel/${channelId}`}>{channelTitle}</NormalLink>
        <div>27k views • 19 hours ago</div>
      </MetaChannelAndViews>
    </MetaContainer>
  )
}

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
