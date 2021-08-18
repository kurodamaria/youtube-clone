import styled from "styled-components";
import {MdClose, MdKeyboardVoice} from "react-icons/all";
import {IconButton} from "./IconButton";
import {useCheckPermission} from "../hooks/useCheckPermission";
import {ModalBlock} from "./ModalBlock";
import {useContext} from "react";
import {VoiceSearchContext} from "@Context";

export function SearchWithVoiceDialog(): JSX.Element {
  const status = useCheckPermission('microphone')
  const {showVoiceSearch, setShowVoiceSearch} = useContext(VoiceSearchContext)
  return (
    <>
      <Container show={showVoiceSearch}>
        {status === 'granted' ? <Listening/> : <NoPermission/>}
        <VoiceIconButton status={status === 'granted' ? 'listening' : 'idle'}/>
        <CloseIconButton onClick={() => {setShowVoiceSearch(false)}}/>
      </Container>
      <ModalBlock show={showVoiceSearch} onClick={() => {setShowVoiceSearch(false)}} />
    </>
  )
}

function NoPermission(): JSX.Element {
  return (
    <>
      <h1>Search with your voice</h1>
      <p>
        To search by voice, go to your browser settings and
        allow access to microphone.
      </p>
    </>
  )
}

function Listening(): JSX.Element {
  return (
    <>
      <h1>Listening...</h1>
    </>
  )
}

type ContainerPropsT = {
  show: boolean;
}

const Container = styled.div<ContainerPropsT>`
  position: fixed;
  z-index: var(--search-with-voice-z-index);
  left: 15%;
  right: 15%;
  top: 1em;
  height: 400px;
  display: ${props => props.show ? 'block' : 'none'};
  padding: 1rem 2rem;
  background-color: hsl(0, 0%, 100%);
`

const CloseIconButton = styled(IconButton).attrs({iconSize: '1.5rem', Icon: MdClose})`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
`
type VoiceIconButtonPropsT = {
  status: 'listening' | 'idle'
}
const VoiceIconButton = styled(IconButton).attrs({iconSize: '3rem', Icon: MdKeyboardVoice})<VoiceIconButtonPropsT>`
  width: 4rem;
  height: 4rem;
  position: absolute;
  left: calc(50% - 2rem);
  right: calc(50% - 2rem);
  bottom: 4rem;
  background-color: ${props => props.status === 'listening' ? 'hsl(0, 50%, 50%)' : 'hsl(0, 0%, 70%)'};
`