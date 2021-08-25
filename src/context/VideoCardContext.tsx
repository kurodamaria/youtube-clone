import {createContext} from "react";

type VideCardContextT = {
  title: string;
  thumbnail: string;
  description: string;
  channelId: string;
  videoId: string;
  duration: string;
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
}

export const VideoCardContext = createContext<VideCardContextT>({} as VideCardContextT)