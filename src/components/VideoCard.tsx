import styled from "styled-components";
import {UserIcon} from "./UserIcon";

export function VideoCard(): JSX.Element {
  return (
    <Container>
      <Thumbnail src='/shirai.jpg'/>
      <Details/>
    </Container>
  )
}

const Container = styled.div`
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
  padding: 0.3em 0.3em;
  border-radius: 0.2em;
`

const Thumbnail = styled.img`
  width: 100%;
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
  display: flex;
  flex-direction: column;
`

function Meta(): JSX.Element {
  return (
    <MetaContainer>
      <MetaTitle>[Akihabara Walk in Tokyo] Moe Moe Kyun Kyun Street Walk ♪ (4K ASMR Nonstop 1 hour 01 minutes)</MetaTitle>
      <MetaChannelAndViews>
        <div>Channel</div>
        <div>27k views•19 hours ago</div>
      </MetaChannelAndViews>
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