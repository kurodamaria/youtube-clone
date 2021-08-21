import {useParams} from "react-router-dom";
import {Fetch} from "../components/Fetch";
import {MapToVideoCards} from "../helpers/MapToVideoCards";
import {HomeContentContainer} from "@Components";

type PageParamsType = {
  query: string;
}

export function Search() {
  const {query} = useParams<PageParamsType>()

  return (
    <HomeContentContainer>
      <Fetch
        uri={`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=AIzaSyBUhZ2UBHtNmslXzTUBbLbzvRAjMPfiEjA`}
        Render={Render}
      />
    </HomeContentContainer>
  )
}

function Render({data}: { data: any }) {
  console.log(typeof data, data)
  return (
    <MapToVideoCards data={data}/>
  )
}
