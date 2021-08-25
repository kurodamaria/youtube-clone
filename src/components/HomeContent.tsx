import {useContext} from "react";
import {HomeContentFilterContext} from "@Context";
import {MapToVideoCards} from "@Helpers";
import {VideoCardGridContainer} from "./VideoCardGridContainer";

export function HomeContent() {
  const filterContext = useContext(HomeContentFilterContext)
  return (
    <VideoCardGridContainer>
      <MapToVideoCards
        url={`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${filterContext.filters[filterContext.currentFilter]}&key=AIzaSyBUhZ2UBHtNmslXzTUBbLbzvRAjMPfiEjA`}/>
    </VideoCardGridContainer>
  )
}