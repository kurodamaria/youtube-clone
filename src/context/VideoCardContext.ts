import {createContext} from "react";

export type VideoCardContextT = {
  thumbnail: string;
  title: string;
  channelTitle: string;
  channelId: string;
  videoId: string;
}

// for id.kind: youtube#video
// VideoCard* component family will read the context and render a video card
export const VideoCardContext = createContext<VideoCardContextT>(undefined!)