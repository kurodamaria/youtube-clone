import {Menu, MenuItem} from "@Components";
import {useContext} from "react";
import {VideoCardContext} from "../../context/VideoCardContext";
import {StorageContext} from "@Context";

export function HistoryContextMenu() {
  const {videoId} = useContext(VideoCardContext)
  const [,,remove] = useContext(StorageContext).historyStorage
  return (
    <Menu>
      <MenuItem title={"Remove"}
                onClick={() => {
                  remove(videoId)
                }}
      />
    </Menu>
  )
}