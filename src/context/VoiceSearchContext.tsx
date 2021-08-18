import React, {createContext, useState} from "react";

type VoiceSearchContextT = {
  showVoiceSearch: boolean;
  setShowVoiceSearch: React.Dispatch<React.SetStateAction<boolean>>
}

export const VoiceSearchContext = createContext<VoiceSearchContextT>({} as VoiceSearchContextT)

type ProviderPropsT = {
  children: React.ReactNode;
}

export function VoiceSearchContextProvider(props: ProviderPropsT) {
  const [showVoiceSearch, setShowVoiceSearch] = useState<boolean>(false)
  return (
    <VoiceSearchContext.Provider value={{showVoiceSearch, setShowVoiceSearch}}>
      {props.children}
    </VoiceSearchContext.Provider>
  )
}