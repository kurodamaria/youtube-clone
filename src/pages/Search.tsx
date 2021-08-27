import {useParams} from "react-router-dom";
import {category, MapToVideoCards, paramReducer} from "@Helpers";
import {VideoCardGridContainer} from "@Components";
import {SearchContextMenu} from "../components/contextmenus/Search";

type PageParamsType = {
    query: string;
}

export function Search() {
    const {query} = useParams<PageParamsType>()

    return (
        <VideoCardGridContainer>
            <MapToVideoCards
                Menu={SearchContextMenu}
                url={category('search') + paramReducer('q', [query]) + paramReducer('maxResults', ['25']) + paramReducer('part', ['snippet'])}/>
        </VideoCardGridContainer>
    )
}