import styled from "styled-components";
import {Overlay} from "./Overlay";

// in case you want to overlay a "void element" like img
type OverlayContainerPropsT = {
  zIndex?: number;
}
export const OverlayContainer = styled.div<OverlayContainerPropsT>`
  position: relative;
  width: fit-content;
  height: fit-content;
  z-index: ${props => props.zIndex};
`

// in the fucking case you just want to show the overlay only when hovering
// and don't want to mess around with ControlledOverlayContainer (onMouseOver == :hover)
export const HoverOverlayContainer = styled(OverlayContainer)`
  ${Overlay} {
    display: none;
  }
  &:hover > ${Overlay} {
    display: block;
  }
`

// in the fucking case you want to control when the overlay should be shown
type ControlledOverlayContainerPropsT = {
  show: boolean;
}
export const ControlledOverlayContainer = styled(OverlayContainer)<ControlledOverlayContainerPropsT>`
  ${Overlay} {
    display: ${props => props.show ? '' : 'none'};
  }
`