import React, {createContext, useState} from "react";
import {ContextProviderPropsT} from "./Prototypes";
import {SearchWithVoiceDialog} from "@Components";
import {ModalDialog} from "../components/ModalDialog";

type ModalDialogContextT = {
  dialogs: [boolean, React.Dispatch<React.SetStateAction<boolean>>][];
}

export const ModalDialogContext = createContext<ModalDialogContextT>({dialogs: []})

export function ModalDialogProvider(props: ContextProviderPropsT) {
  const [showSearchWithVoiceDialog, setShowSearchWithVoiceDialog] = useState(false)
  return (
    <ModalDialogContext.Provider value={{dialogs: [[showSearchWithVoiceDialog, setShowSearchWithVoiceDialog]]}}>
      {props.children}
      <ModalDialog control={[showSearchWithVoiceDialog, setShowSearchWithVoiceDialog]}
                   block={true}
      >
        <SearchWithVoiceDialog/>
      </ModalDialog>
    </ModalDialogContext.Provider>
  )
}