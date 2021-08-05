import {
  Fixed
} from '../enchantments/component'

import {
  Container
} from './Containers'

import styled from 'styled-components'
import { useEffect, useRef } from 'react'

const ModalContainer = styled(Fixed(Container))`
  display: ${props => props.show ? 'block' : 'none'};
`

let scrollY = 0
export const Modal = ({ show, children }) => {
  // disable scroll when modal opens
  useEffect(() => {
    if (show) {
      // get the current scroll in pixel
      scrollY = window.scrollY
      console.log('setting styles, scrollY', scrollY, window.scrollY)
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
      left='0'
      right='0'
      top='0'
      bottom='0'
      style={{ backgroundColor: 'hsla(0, 0%, 20%, 50%)' }}
      show={show}
    >
      {children}
    </ModalContainer>
  )
}
