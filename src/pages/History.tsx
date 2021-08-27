import {useContext} from "react";
import {StorageContext} from "@Context"
import styled from "styled-components";
import {category, MapToVideoCards, paramReducer} from "@Helpers";
import {VideoCardGridContainer} from '@Components'
import {HistoryContextMenu} from "../components/contextmenus";
import {useDocumentTitle} from "../hooks/useDocumentTitle";
import {NoWhatever} from "../components/NoWhatever";

export function History() {
  const [history] = useContext(StorageContext).historyStorage
  console.log('render History', history)
  useDocumentTitle('History')
  return (
    <Container>
      {
        history.length === 0 &&
          <NoWhatever title={"No History"}
                      desc={"You have a clean history. Good job!"}
                      img={"https://i.pinimg.com/originals/3c/04/52/3c04527eaab58101e67f1413b5e1dcf8.gif"}
          />
      }
      {
        history.length !== 0 && <HistoryStatisticsPanel/>
      }
      <HistoryItems>
        {
          history.length !== 0
          && <VideoCardGridContainer>
            <MapToVideoCards
              Menu={HistoryContextMenu}
              url={category('videos') + paramReducer('id', history) + paramReducer('part', ['snippet', ' statistics', 'contentDetails'])}/>
          </VideoCardGridContainer>
        }
      </HistoryItems>
    </Container>
  )
}

const Container = styled.div`

`

function HistoryStatisticsPanel() {
  const [history, , , clearHistory] = useContext(StorageContext).historyStorage
  return (
    <HistoryStatisticsPanelMasterContainer>
      <div>Total {history.length}</div>
      <ActionGroup>
        <button onClick={() => {
          clearHistory()
        }}>Delete All
        </button>
      </ActionGroup>
    </HistoryStatisticsPanelMasterContainer>
  )
}

const HistoryStatisticsPanelMasterContainer = styled.div`
  position: sticky;
  z-index: var(--home-content-filter-z-index);
  top: var(--header-height);
  width: 300px;
  margin-left: auto;
  border: 1px solid hsl(0, 0%, 50%);
  background-color: hsl(0, 0%, 97%);
  display: flex;
  justify-content: space-between;
  padding: 1em 1em;
`

const ActionGroup = styled.div`
  align-self: flex-end;

  & > button {
    padding: 0.5em 2em;
    cursor: pointer;
    transition: background-color 0.2s;
    background-color: hsl(0, 0%, 100%);
    border: 1px solid hsl(0, 0%, 50%);
  }

  & > button:focus {
    background-color: hsl(0, 0%, 95%);
  }

  & > button:hover:active {
    background-color: hsl(0, 0%, 90%);
  }

  & > button + button {
    border-left: none;
  }
`

const HistoryItems = styled.div`
`