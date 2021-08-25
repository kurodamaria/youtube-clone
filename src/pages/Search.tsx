import {useParams} from "react-router-dom";
import {category, MapToVideoCards, paramReducer} from "@Helpers";
import {VideoCardGridContainer} from "@Components";

type PageParamsType = {
  query: string;
}

export function Search() {
  const {query} = useParams<PageParamsType>()

  return (
    <VideoCardGridContainer>
      <MapToVideoCards
        url={category('search') + paramReducer('q', [query]) + paramReducer('maxResults', ['25']) + paramReducer('part', ['snippet', 'statistics', 'contentDetails'])}/>
    </VideoCardGridContainer>
  )
}