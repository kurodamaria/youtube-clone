import styled from "styled-components";
import {MdClose, MdKeyboardVoice} from "react-icons/all";
import {IconButton} from "./IconButton";
import {useCheckPermission} from "../hooks/useCheckPermission";
import {Desc} from "./Desc";
import {useContext} from "react";
import {ModalDialogContext} from "@Context";

export function SearchWithVoiceDialog(): JSX.Element {
  const status = useCheckPermission('microphone')
  const setShowVoiceSearchDialog = useContext(ModalDialogContext).dialogs[0][1]
  return (
    <Container>
      {status === 'granted' ? <Listening/> : <NoPermission/>}
      <VoiceIconButton status={status === 'granted' ? 'listening' : 'idle'}/>
      <CloseIconButton onClick={() => {
        setShowVoiceSearchDialog(false)
      }}/>
    </Container>
  )
}

function NoPermission(): JSX.Element {
  return (
    <>
      <h1>Search with your voice</h1>
      <p>
        To search by voice, go to your browser settings and
        allow access to microphone.
        <Desc>Note this is just an UI</Desc>
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

const Container = styled.div`
  box-shadow: 0px 0px 3px 1px hsla(0, 0%, 0%, 0.5);
  height: 400px;
  width: 80vw;
  padding: 1rem 2rem;
  background-color: hsl(0, 0%, 100%);
  margin: 10vh auto;
  position: relative;
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