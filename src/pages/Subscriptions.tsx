import {useDocumentTitle} from "../hooks/useDocumentTitle";
import styled from "styled-components";
import {SubscribeButton} from "../components/SubscribeButton";
import {FlexContainerLink} from "../components/Links";
import {Fetch} from "../components/Fetch";
import {useContext} from "react";
import {StorageContext} from "@Context";
import {category, paramReducer} from "@Helpers";

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
  const [subs] = useContext(StorageContext).subsStorage
  return (
    <Container>
      {
        subs.length === 0
          ? <h1>No Subs</h1>
          : <Fetch
            uri={category('channels') + paramReducer('id', subs) + paramReducer('part', ['snippet', 'statistics'])}
            Render={SubscriptionItemsRender}/>
      }
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