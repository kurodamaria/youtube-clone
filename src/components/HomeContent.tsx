import {useContext} from "react";
import {HomeContentFilterContext} from "@Context";
import {MapToVideoCards} from "@Helpers";
import {VideoCardGridContainer} from "./VideoCardGridContainer";
import {HomeContextMenu} from "./contextmenus";

export function HomeContent() {
  const filterContext = useContext(HomeContentFilterContext)
  console.log('render HomeContent with filter', filterContext.filters[filterContext.currentFilter])
  return (
    <VideoCardGridContainer>
      <MapToVideoCards
        Menu={HomeContextMenu}
        url={`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${filterContext.filters[filterContext.currentFilter]}&key=AIzaSyBUhZ2UBHtNmslXzTUBbLbzvRAjMPfiEjA`}/>
    </VideoCardGridContainer>
  )
}