import {useParams} from "react-router-dom";

type PageParamsT = {
  channelId: string;
}

export function Channel() {
  const {channelId} = useParams<PageParamsT>()
  return (
    <h1>
      Channel of {channelId}
    </h1>
  )
}