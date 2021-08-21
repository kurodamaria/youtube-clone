import React, {createContext, useState} from "react";

const filters = [
  'ギャルゲ/エロゲソング', 'Lofi music', 'Background music', 'Pixel art',
  'Playlists', 'Computer programming', 'Anime', 'Science', 'Art',
  'Live', 'Electronic dance music', 'J-Pop', 'Illustrations',
  'Computers', 'JRPG', 'New to you'
]

type HomeContentFilterContextT = {
  filters: string[];
  currentFilter: number;
  setCurrentFilter: React.Dispatch<React.SetStateAction<number>>;
}

export const HomeContentFilterContext = createContext<HomeContentFilterContextT>({} as HomeContentFilterContextT)
type HomeContentFilterContextProviderPropsT = {
  children: React.ReactNode;
}

export const HomeContentFilterContextProvider = (props: HomeContentFilterContextProviderPropsT) => {
  const [currentFilter, setCurrentFilter] = useState(0)
  return (
    <HomeContentFilterContext.Provider value={{ filters, currentFilter, setCurrentFilter  }}>
      {props.children}
    </HomeContentFilterContext.Provider>
  )
}