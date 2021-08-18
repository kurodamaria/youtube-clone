import styled, {css} from "styled-components";
import {useDisableBodyScroll} from "@Hooks";

type ModalBlockPropsT = {
  show: boolean;
  onClick: () => void;
}

export function ModalBlock(props: ModalBlockPropsT) {
  useDisableBodyScroll(props.show)
  return (
    <Layer show={props.show} onClick={props.onClick}/>
  )
}

type LayerPropsT = {
  show: boolean;
}

export const Layer = styled.div<LayerPropsT>`
  position: fixed;
  z-index: var(--modal-block-z-index);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.2;
  background-color: ${props => props.theme.colors.modalBlock.bg};
  transition: opacity 0.2s,
  visibility 0.2s;
  ${props => props.show
          ? css`
            opacity: 0.2;
            visibility: visible;
          `
          : css`
            opacity: 0;
            visibility: hidden;
          `
  }
`