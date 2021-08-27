import styled from "styled-components";
import {UserIcon} from "./UserIcon";
import {Overlay} from "./Overlay";
import {IoMdTrash, MdMoreVert, MdWatchLater} from "react-icons/all";
import {IconContext, IconType} from "react-icons";
import {IconButton} from "./IconButton";
import React, {createContext, useCallback, useContext, useState} from "react";
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
import {StorageContext} from "@Context";

type VideoCardPropsT = {
  Menu: () => JSX.Element;
}

export function VideoCard(props: VideoCardPropsT): JSX.Element {
  const [hoveringMaster, setHoveringMaster] = useState(false)
  const [dropdownShowing, setDropdownShowing] = useState(false)
  const [watchLater, addWatchLater, removeWatchLater] = useContext(StorageContext).watchLaterStorage
  const {videoId, thumbnail, channelId} = useContext(VideoCardContext)
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
              <ThumbnailPart thumbnail={thumbnail}/>
              <Overlay top='5px' bottom='' left='' right='5px'>
                <DisableClickableEffect>
                  <PreventDefaultOnClick>
                    {
                      watchLater.includes(videoId)
                        ? <HoverAction tip={'remove watch later'}
                                       Icon={IoMdTrash}
                                       onClick={() => {
                                         removeWatchLater(videoId)
                                       }}
                        />
                        : <HoverAction tip={'add watch later'}
                                       Icon={MdWatchLater}
                                       onClick={() => {
                                         addWatchLater(videoId)
                                       }}
                        />
                    }
                  </PreventDefaultOnClick>
                </DisableClickableEffect>
              </Overlay>
            </ControlledOverlayContainer>
            <ControlledOverlayContainer show={hoveringMaster || dropdownShowing}>
              <DetailsPart channelId={channelId}/>
              <Overlay left='' bottom='' top='0em' right='-0.5em'>
                <DisableClickableEffect>
                  <PreventDefaultOnClick>
                    <Dropdown
                      onShow={() => {
                        setDropdownShowing(true)
                      }}
                      onDismiss={() => {
                        setDropdownShowing(false)
                      }}
                      zIndex={1}
                      direction={'left'}
                    >
                      <MoreVertIconButton/>
                      <props.Menu/>
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

const MoreVertIconButton = styled(IconButton).attrs({Icon: MdMoreVert, iconSize: '1.5rem', padding: '0.5em 0.5em'})`
  background-color: transparent;
`

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

type ThumbnailPartPropsT = {
  thumbnail: string;
}

function _ThumbnailPart(props: ThumbnailPartPropsT) {
  return (
    <Thumbnail src={props.thumbnail}/>
  )
}

const ThumbnailPart = React.memo(_ThumbnailPart)

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

const DetailsContext = createContext({} as ChannelContextT)

type DetailsPartPropsT = {
  channelId: string;
}

function _DetailsPart(props: DetailsPartPropsT): JSX.Element {
  const fetchUrl = category('channels') + paramReducer('id', [props.channelId]) + paramReducer('part', ['snippet', 'statistics', 'brandingSettings'])
  console.log('_DetailsPart, fetchUrl', fetchUrl)
  const render = useCallback((data: any) => {
    return (
      <>
        <PaddingMargin margin='0.75rem 0.75rem 0 0'>
          <UserIcon radius='40px' src={data.items[0].snippet.thumbnails.default.url}/>
        </PaddingMargin>
        <DetailsContext.Provider value={{channelId: data.items[0].id, channelTitle: data.items[0].snippet.title}}>
          <Meta/>
        </DetailsContext.Provider>
      </>
    )
  }, [])
  return (
    <DetailsMasterContainer>
      <Fetch
        url={fetchUrl}>
        {render}
      </Fetch>
    </DetailsMasterContainer>
  )
}

const DetailsPart = React.memo(_DetailsPart)

const DetailsMasterContainer = styled.div`
  display: flex;
`


function Meta(): JSX.Element {
  const {title} = useContext(VideoCardContext)
  const {channelTitle, channelId} = useContext(DetailsContext)
  return (
    <MetaContainer>
      <MetaTitle title={title}>{title}</MetaTitle>
      <MetaChannelAndViews>
        <DisableClickableEffect>
          <NormalLink to={`/channel/${channelId}`}>{channelTitle}</NormalLink>
        </DisableClickableEffect>
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
