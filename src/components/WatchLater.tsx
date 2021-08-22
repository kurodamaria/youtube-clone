import styled from "styled-components";
import {IconButton} from "./IconButton";
import {IoMdTrash, MdWatchLater} from "react-icons/all";
import {IconContext} from "react-icons";
import {useContext} from "react";
import {StorageContext} from "@Context";

function Empty() {
  return <>
    <IconContext.Provider value={{
      size: "7.5rem",
      style: {color: "hsl(0, 0%, 80%)", marginBottom: "1.5rem", minWidth: "7.5rem", minHeight: "7.5rem"}
    }}>
      <MdWatchLater/>
    </IconContext.Provider>
    <strong>
      Add some videos to the queue
    </strong>
    <p>
      Click add to queue to add videos to here and watch later.
    </p>
  </>;
}

function WatchLaters() {
  const {watchLaterStorage} = useContext(StorageContext)
  return (
    <div>
      {
        watchLaterStorage.get.map(vid => <div>{vid}</div>)
      }
    </div>
  )
}

export function WatchLater() {
  const {watchLaterStorage} = useContext(StorageContext)
  return (
    <Container>
      <Header>
        <span>Videos to watch</span>
        <DeleteAllIcon/>
      </Header>
      <hr/>
      <Body>
        {
          watchLaterStorage.get.length === 0
            ? <Empty/>
            : <WatchLaters/>
        }
      </Body>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  z-index: var(--nofications-z-index);
  top: 0;
  right: 124px;
  bottom: 0;
  max-width: 480px;
  min-width: 408px;
  background-color: hsl(0, 0%, 100%);
  border: 1px solid hsl(0, 0%, 80%);
  border-top: none;
`

const Header = styled.div`
  display: flex;
  height: var(--header-height);
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 0.5rem;

  & > span {
    font-size: 1rem;
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > strong {
    width: 280px;
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.375em;
  }

  & > p {
    width: 280px;
    text-align: center;
    font-size: 0.825rem;
    line-height: 1.25rem;
  }
`

const DeleteAllIcon = styled(IconButton).attrs({iconSize: '1.5rem', Icon: IoMdTrash})`
  height: 2.5rem;
  width: 2.5rem;
`