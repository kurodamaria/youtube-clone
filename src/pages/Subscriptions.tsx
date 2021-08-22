import {useDocumentTitle} from "../hooks/useDocumentTitle";
import styled from "styled-components";
import {SubscribeButton} from "../components/SubscribeButton";
import {FlexContainerLink} from "../components/Links";
import {Fetch} from "../components/Fetch";

function SubscriptionItemsRender({data}: { data: any }) {
  return (
    <>
      {
        data.items.map(({id, snippet, statistics}: { id: any, snippet: any, statistics: any }, i: number) => (
          <SubscriptionItem>
            <Profile src={snippet.thumbnails.medium.url}/>
            <FlexContainerLink to={"/channel/" + id}>
              <Meta>
                <Name>
                  {snippet.title}
                </Name>
                <Statistics>
                  {statistics.viewCount} subscribers • {statistics.videoCount} videos
                </Statistics>
                <Description title={snippet.description}>
                  {snippet.description}
                </Description>
              </Meta>
            </FlexContainerLink>
            <SubscribeButton channelId={id}/>
          </SubscriptionItem>
        ))
      }
    </>
  )
}

export function Subscriptions(): JSX.Element {
  useDocumentTitle('Subscriptions')
  return (
    <Container>
      <Fetch
        uri={`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=UC-nhyMMGNXQQsXrdtDx3mSg&id=UC5-dqG9RA0Y3twFkCDSb3VA&id=UCdBK94H6oZT2Q7l0-b0xmMg&key=AIzaSyBUhZ2UBHtNmslXzTUBbLbzvRAjMPfiEjA`}
        Render={SubscriptionItemsRender}/>
    </Container>
  )
}

const Container = styled.div`
  ${FlexContainerLink} {
    flex: 1;
  }
`

const SubscriptionItem = styled.div`
  display: flex;
  margin: 2em 2em;

  ${SubscribeButton} {
    align-self: center;
  }
`

const Profile = styled.img`
  height: 98px;
  width: 98px;
  border-radius: 50%;
  border: 1px solid red;

`

const Meta = styled.div`
  flex: 1;
  align-self: center;
  margin-left: 5vw;
  margin-right: 5vw;
`

const Name = styled.span`
  font-size: 1.125rem;
  line-height: 26px;
`

const Statistics = styled.div`
  font-size: 0.75rem;
  line-height: 1.5em;
`

const Description = styled.div`
  font-size: 0.75rem;
  line-height: 1.5em;

  // support for two line overflow with ellipsis like magic :(
  max-height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`