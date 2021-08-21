import {VideoCardContext} from "../context/VideoCardContext";
import {VideoCard} from "../components/VideoCard";

export function MapToVideoCards({data}: { data: any }) {
  return (
    <>
      {
        data.items.map(({snippet, id}: { snippet: any, id: any }) =>
          <VideoCardContext.Provider value={
            {
              thumbnail: snippet.thumbnails.medium.url,
              title: snippet.title,
              channelTitle: snippet.channelTitle,
              channelId: snippet.channelId,
              videoId: id.videoId
            }}
          >
            <VideoCard/>
          </VideoCardContext.Provider>
        )
      }
    </>
  )
}