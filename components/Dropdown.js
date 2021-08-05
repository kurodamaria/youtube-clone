import { useCallback, useRef, useState } from 'react'
import {
  Container,
  FlexContainer
} from './Containers'

import styled from 'styled-components'
import { useClickOutside } from '../hooks/useClickOutside'

const DropdownContainer = styled(Container)`
  position: relative;
`

const DropdownBody = styled(FlexContainer)`
  position: absolute;
  display: ${props => props.show ? 'flex' : 'none'};
  background-color: white;
  ${
    // props.left means drawing the dropdown from right to left
    props => props.left ? 'right: 0%;' : 'left: 0%;'
  }
`

export function Dropdown ({ children, togger, left }) {
  const [show, setShow] = useState(false)
  const ref = useRef()
  const handleClickOutside = useCallback(() => {
    if (show) {
      setShow(false)
    }
  }, [show])
  useClickOutside(ref, handleClickOutside)
  return (
    <DropdownContainer ref={ref}>
      <FlexContainer
        onClick={() => {
          setShow(!show)
        }}
        alignItems='center'
      >
        {togger}
      </FlexContainer>
      <DropdownBody show={show} direction='column' left={left}>
        {children}
      </DropdownBody>
    </DropdownContainer>
  )
}
