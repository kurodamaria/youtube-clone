import React, {createContext} from "react";

type ModalContextT = {
  // so the nth control controls nth modal
  modalControls: React.Dispatch<React.SetStateAction<boolean>>[]
}

export const ModalContext = createContext<ModalContextT>({modalControls: []})

