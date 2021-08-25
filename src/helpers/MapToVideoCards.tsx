import {VideoCardContext} from "../context/VideoCardContext";
import {VideoCard} from "../components/VideoCard";
import {Fetch} from "../components/Fetch";

type MapToVideoCardsPropsT = {
  url: string;
}
export function MapToVideoCards(props: MapToVideoCardsPropsT) {
  return (
    <Fetch url={props.url}>
      {
        (data: any) =>
        data.items.map(({snippet, id, statistics, contentDetails}: { snippet: any, id: any, statistics: any, contentDetails: any }) =>
          <VideoCardContext.Provider value={
            {
              thumbnail: snippet.thumbnails.medium.url,
              title: snippet.title,
              description: snippet.description,
              channelId: snippet.channelId,
              videoId: id.videoId,
              viewCount: statistics?.viewCount ?? 'unknown',
              likeCount: statistics?.likeCount ?? 'unknown',
              dislikeCount: statistics?.dislikeCount ?? 'unknown',
              duration: contentDetails?.duration ?? 'unknown'
            }}
          >
            <VideoCard/>
          </VideoCardContext.Provider>
        )
      }
    </Fetch>
  )
}