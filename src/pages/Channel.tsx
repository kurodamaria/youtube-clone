import {useParams} from "react-router-dom";
import styled from "styled-components";
import {SubscribeButton} from "../components/SubscribeButton";
import {Loading} from "../components/Loading";
import {Fetch} from "../components/Fetch";
import {category, paramReducer} from "@Helpers";
import {useCallback} from "react";

type PageParamsT = {
  channelId: string;
}

export function Channel() {
  const {channelId} = useParams<PageParamsT>()
  const render = useCallback((data: any) => {
    return (
      <>
        {
          data.items[0].brandingSettings.image &&
          <ChannelBanner>
            <img
              src={data.items[0].brandingSettings.image.bannerExternalUrl + '=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'}
              alt={"channel_banner"}/>
          </ChannelBanner>
        }
        <ChannelHeading>
          <ChannelProfile>
            <ChannelThumbnail src={data.items[0].snippet.thumbnails.medium.url} alt={"channel_profile"}/>
            <ChannelName>{data.items[0].snippet.title}</ChannelName>
          </ChannelProfile>
          <SubscribeButton channelId={data.items[0].id}/>
        </ChannelHeading>
      </>
    )
  }, [])
  return (
    <Container>
      <Fetch
        url={category('channels') + paramReducer('id', [channelId]) + paramReducer('part', ['snippet', 'statistics', 'brandingSettings'])}>
        {render}
      </Fetch>
      <Loading/>
    </Container>
  )
}

const Container = styled.div`

`

const ChannelBanner = styled.div`
  height: calc(100vw / 6.2 - 10px);
  width: 100%;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

const ChannelHeading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 1em 4px;
`

const ChannelProfile = styled.div`
  display: flex;
`

const ChannelThumbnail = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  margin-right: 24px;
  @media (max-width: 701px) {
    display: none;
  }
`

const ChannelName = styled.span`
  align-self: center;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.25em;
`


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ChannelVideos = styled.div`
  max-width: 2256px;
  margin: 1rem auto 1em auto;
  padding: 0 1em;
  display: grid;
  --items-per-row: 1;
  @media (max-width: 511px) {
    width: 336px;
  }
  @media (min-width: 512px) {
    --items-per-row: 2;
  }
  @media (min-width: 888px) {
    --items-per-row: 3;
  }
  @media (min-width: 1144px) {
    --items-per-row: 4;
  }
  @media (min-width: 1800px) {
    --items-per-row: 5;
  }
  @media (min-width: 2136px) {
    --items-per-row: 6;
  }
  gap: 1em 1em;
  // relative to the parent container (ContentContainer)
  width: 100%;
  // relative to this container
  grid-template-columns: repeat(var(--items-per-row), calc((100% - var(--items-per-row) * 1em + 1em) / var(--items-per-row)));
`