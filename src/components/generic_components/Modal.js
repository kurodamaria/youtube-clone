import {
  DivContainer
} from './Containers'

import styled from 'styled-components'
import { useEffect, useRef } from 'react'

import { CssModalTransition, CssFixed } from '@Styles'
import { useDisableDocumentScroll } from '@Hooks'

const ModalContainer = styled(DivContainer)`
  ${CssFixed}
  ${CssModalTransition}
  background-color: hsl(0, 0%, 0%);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: ${props => props.show ? '0.2' : '0'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
`

export const Modal = ({ show, children, zIndex }) => {
  // disable scroll when modal opens
  useDisableDocumentScroll(show)
  const ref = useRef()

  return (
    <ModalContainer
      ref={ref}
      show={show}
      zIndex={zIndex}
    >
      {children}
    </ModalContainer>
  )
}
