import {Loading} from "./Loading";
import {ErrorT, useMemoFetch} from "../hooks/useMemoFetch";

type FetchPropsT<DataT> = {
  url: string;
  children: (data: DataT) => JSX.Element;
}

// requires ts 2.9+
export function Fetch<DataT>(props: FetchPropsT<DataT>) {
  const [data, error] = useMemoFetch<DataT>(props.url)
  if (data) {
    console.log('got data', data)
    return props.children(data)
  } else if (error) {
    return <DefaultErrorRender error={error}/>
  } else {
    return <Loading/>
  }
}

function DefaultErrorRender({error}: { error: ErrorT }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.msg}</p>
    </div>
  )
}