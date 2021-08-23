// General Modal Dialog Interface

import React, {useRef} from "react";
import styled, {css} from "styled-components";
import {useDisableBodyScroll} from "@Hooks";

export declare type ModalDialogControlsT = [boolean, React.Dispatch<React.SetStateAction<boolean>>]
type ModalDialogPropsT = {
  control: ModalDialogControlsT;
  block?: boolean;
  children: React.ReactNode;
}

export function ModalDialog(props: ModalDialogPropsT) {
  const ref = useRef<HTMLDivElement>(null!)
  useDisableBodyScroll(props.control[0] && props.block === true)
  return (
    <ModalDialogContainer show={props.control[0]}
                          ref={ref}
                          onClick={(ev) => {
                            if (ev.target === ref.current) {
                              props.control[1](false)
                            }
                          }}
    >
      {props.children}
    </ModalDialogContainer>
  )
}

type ModalDialogContainerPropsT = {
  show: boolean;
}

const ModalDialogContainer = styled.div<ModalDialogContainerPropsT>`
  transition: opacity 0.4s,
  visibility 0s ${props => props.show ? '' : '0.4s'};
  ${props => props.show
          ? css`
            opacity: 1;
            visibility: visible;
          `
          : css`
            opacity: 0;
            visibility: hidden;
          `
  }
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsla(0, 0%, 0%, 0.4);
  z-index: var(--modal-dialog-z-index);
`