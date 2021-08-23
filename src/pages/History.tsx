import {useContext} from "react";
import {StorageContext} from "@Context"
import styled from "styled-components";
import {Fetch} from "../components/Fetch";
import {category, MapToVideoCards, paramReducer} from "@Helpers";
import {IconButton, VideoCardGridContainer} from '@Components'
import {IoMdTrash} from "react-icons/all";

export function History() {
  const [history,,, clearHistory] = useContext(StorageContext).historyStorage
  console.log(history)
  return (
    <Container>
      <ClearHistoryIconButton onClick={() => {
        clearHistory()
      }}/>
      {
        history.length === 0
          ? <h1>No History</h1>
          : <VideoCardGridContainer>
            <Fetch
              uri={category('videos') + paramReducer('id', history) + paramReducer('part', ['snippet'])}
              Render={MapToVideoCards}/>
          </VideoCardGridContainer>
      }
    </Container>
  )
}

const Container = styled.div`

`

const ClearHistoryIconButton = styled(IconButton).attrs({Icon: IoMdTrash, iconSize: '3rem'})`
  
`