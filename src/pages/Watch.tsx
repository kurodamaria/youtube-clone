import {useParams} from "react-router-dom";
import {useDocumentTitle} from "../hooks/useDocumentTitle";
import {useContext, useEffect, useState} from "react";
import {GuideContext, StorageContext} from "@Context";
import {PageContentBlock} from "../components/PageContentBlock";
import styled from "styled-components";

// ... this is lame
type PageParamsType = {
  id: string;
}

export function Watch() {
  const {id} = useParams<PageParamsType>()
  const [, addToHistory] = useContext(StorageContext).historyStorage
  useDocumentTitle(id)
  useEffect(() => {
    console.log('addToHistory', id)
    addToHistory(id)
  }, [addToHistory, id])
  return (
    <>
      <Player videoId={id}/>
    </>
  )
}

type PlayerPropsT = {
  videoId: string;
}

function Player(props: PlayerPropsT) {
  const [isLoading, setIsLoading] = useState(true)
  const guideContext = useContext(GuideContext)
  return (
    <>
      <PageContentBlock block={false} show={isLoading}/>
      <PlayerContainer widthOffset={guideContext.lockGuide ? 'var(--mini-guide-width)' : 'var(--guide-width)'}>
        <iframe width="100%" height="100%" title={props.videoId}
                src={`https://www.youtube.com/embed/${props.videoId}?&autoplay=1&controls=1&modestbranding=1&disablekb=1`}
                frameBorder="0"
                onLoad={() => {
                  setIsLoading(false)
                }}
                allowFullScreen
        />
      </PlayerContainer>
    </>
  )
}

type PlayerContainerPropsT = {
  widthOffset: string;
}
const PlayerContainer = styled.div<PlayerContainerPropsT>`
  height: calc(100vh - var(--header-height));
  width: 100vw;
  @media (min-width: 808px) {
    width: calc(100vw - var(--mini-guide-width));
  }
  @media (min-width: 1329px) {
    width: calc(100vw - var(--guide-width));
    width: calc(100vw - ${props => props.widthOffset});
  }
`