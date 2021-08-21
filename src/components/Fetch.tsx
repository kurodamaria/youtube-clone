import {useEffect, useState} from "react";
import {Loading} from "./Loading";
import {Error} from "./Error";
import {IconButton} from "./IconButton";
import {MdRefresh} from "react-icons/all";

type FetchPropsT = {
  uri: string;
  Render: ({data}: { data: Object }) => JSX.Element;
  Loading?: () => JSX.Element;
  Error?: ({error}: { error: Object }) => JSX.Element;
}

export function Fetch(props: FetchPropsT) {
  const [data, setData] = useState<Object | null>(null)
  const [error, setError] = useState<Object | null>(null)
  const [retry, setRetry] = useState(false)
  useEffect(() => {
    setData(null)
    setError(null)
    setRetry(false)
    fetch(props.uri)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.message)
        } else {
          setData(data)
        }
      })
      .catch(err => {
        setError(err)
      })
  }, [props.uri, retry])
  if (data) {
    return (
      <props.Render data={data}/>
    )
  } else if (error) {
    if (props.Error) {
      return (
        <props.Error error={error}/>
      )
    } else {
      return (
        <Error>
          <div style={{display: "flex", alignItems: 'center', justifyContent: 'space-between'}}>
            <h2>Error!</h2>
            <IconButton Icon={MdRefresh} iconSize='1.5rem' onClick={() => {
              setRetry(true)
            }}/>
          </div>
          Some error happened during fetching <a href={props.uri}>{props.uri}</a>
          <br/>
          <h4>Details</h4>
          {JSON.stringify(error)}
        </Error>
      )
    }
  } else {
    if (props.Loading) {
      return (
        <props.Loading/>
      )
    } else {
      return (
        <Loading/>
      )
    }
  }
}