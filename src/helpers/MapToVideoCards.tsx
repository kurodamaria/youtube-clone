import {VideoCardContext} from "../context/VideoCardContext";
import {VideoCard} from "../components/VideoCard";
import {Fetch} from "../components/Fetch";
import {useCallback} from "react";

type MapToVideoCardsPropsT = {
  url: string;
  Menu: () => JSX.Element;
}

export function MapToVideoCards(props: MapToVideoCardsPropsT) {
  console.log('MapToVideoCards', props)
  const map = useCallback((data: any) =>
    data.items.map(({
                      snippet,
                      id,
                      statistics,
                      contentDetails
                    }: { snippet: any, id: any, statistics: any, contentDetails: any }) =>
      <VideoCardContext.Provider key={id.videoId ?? id} value={
        {
          thumbnail: snippet.thumbnails.medium.url,
          title: snippet.title,
          description: snippet.description,
          channelId: snippet.channelId,
          videoId: id.videoId ?? id,
          viewCount: statistics?.viewCount,
          likeCount: statistics?.likeCount ?? 'unknown',
          dislikeCount: statistics?.dislikeCount ?? 'unknown',
          duration: contentDetails?.duration ?? 'unknown',
          publishedAt: snippet.publishedAt
        }}
      >
        <VideoCard key={id.videoId ?? id} Menu={props.Menu}/>
      </VideoCardContext.Provider>
    ), [props.Menu])
  return (
    <Fetch url={props.url}>
      { map }
    </Fetch>
  )
}