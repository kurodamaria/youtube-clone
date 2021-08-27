import {Loading} from "./Loading";
import {ErrorT, useMemoFetch} from "../hooks/useMemoFetch";
import React from "react";

type FetchPropsT<DataT> = {
  url: string;
  children: (data: DataT) => JSX.Element;
}

// requires ts 2.9+
function DirtyFetch<DataT>(props: FetchPropsT<DataT>) {
  const [data, error] = useMemoFetch<DataT>(props.url)
  if (data) {
    return props.children(data)
  } else if (error) {
    return <DefaultErrorRender error={error}/>
  } else {
    return <Loading/>
  }
}

export const Fetch = React.memo(DirtyFetch)

function DefaultErrorRender({error}: { error: ErrorT }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.msg}</p>
    </div>
  )
}