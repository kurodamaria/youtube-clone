import {useContext} from "react";
import {HomeContentFilterContext} from "../context/HomeContentFilterContext";
import {Fetch} from "./Fetch";
import {MapToVideoCards} from "../helpers/MapToVideoCards";
import {VideoCardGridContainer} from "./VideoCardGridContainer";

function Render({data}: { data: any }) {
  return (
    <MapToVideoCards data={data}/>
  )
}

export function HomeContent() {
  const filterContext = useContext(HomeContentFilterContext)
  return (
    <VideoCardGridContainer>
      <Fetch
        uri={`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${filterContext.filters[filterContext.currentFilter]}&key=AIzaSyBUhZ2UBHtNmslXzTUBbLbzvRAjMPfiEjA`}
        Render={Render}
      />
    </VideoCardGridContainer>
  )
}