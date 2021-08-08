import {
  DivContainer
} from './Containers'

import styled from 'styled-components'
import { useEffect, useRef } from 'react'

import { CssModalTransition, CssFixed } from '@Styles'

const ModalContainer = styled(DivContainer)`
  ${CssFixed}
  background-color: hsl(0, 0%, 0%);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: ${props => props.show ? '0.2' : '0'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  ${CssModalTransition}
`

let scrollY = 0
export const Modal = ({ show, children, zIndex }) => {
  // disable scroll when modal opens
  useEffect(() => {
    if (show) {
      // get the current scroll in pixel
      scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.overflowY = 'scroll'
      document.body.style.left = '0px'
      document.body.style.right = '0px'
      document.body.style.bottom = '0px'
      document.body.style.top = `${-scrollY}px`
    } else {
      document.body.style.position = 'static'
      window.scroll(0, scrollY)
    }
  }, [show])

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
