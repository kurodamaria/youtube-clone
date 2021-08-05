import styled from 'styled-components'
import { useRef, useCallback } from 'react'
import { useClickOutside } from '../hooks/useClickOutside'
import { Modal } from './Modal'
import { Fixed } from '../enchantments/component'
import { Container } from './Containers'

const DrawerContainer = styled(Fixed(Container))`
  left: ${props => props.right ? 'unset' : '0'};
  right: ${props => props.left ? 'unset' : '0'};
  top: ${props => props.bottom ? 'unset' : '0'};
  bottom: ${props => props.top ? 'unset' : '0'};

  width: ${props => props.width};
  height: ${props => props.height};

  background-color: white;
`

export const ModalDrawer = ({ show, setShow, children }) => {
  const ref = useRef()
  const handleClickOutside = useCallback(() => {
    setShow(false)
  }, [setShow])
  useClickOutside(ref, handleClickOutside)
  return (
    <Modal show={show}>
      <DrawerContainer ref={ref}>
        {children}
      </DrawerContainer>
    </Modal>
  )
}
