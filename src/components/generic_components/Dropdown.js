import styled from 'styled-components'
import { useCallback, useRef, useState } from 'react'

import { DivContainer } from '@GCompo'
import { useClickOutside } from '@Hooks'
import { CssDisplayControl } from '@Styles'
const DropdownContainer = styled(DivContainer)`
  position: relative;
`

const DropdownBody = styled(DivContainer)`
  position: absolute;
  background-color: white;
  ${
    // props.left means drawing the dropdown from right to left
    props => props.left ? 'right: 0%;' : 'left: 0%;'
  }
  ${CssDisplayControl}
`

export function Dropdown ({ children, togger, left }) {
  const [hide, setHide] = useState(true)
  const ref = useRef()
  const handleClickOutside = useCallback(() => {
    if (!hide) {
      setHide(true)
    }
  }, [hide, setHide])

  useClickOutside(ref, handleClickOutside)
  return (
    <DropdownContainer ref={ref}>
      <DivContainer
        onClick={() => {
          setHide(!hide)
        }}
        display='flex'
        alignItems='center'
      >
        {togger}
      </DivContainer>
      <DropdownBody hide={hide} direction='column' left={left}>
        {children}
      </DropdownBody>
    </DropdownContainer>
  )
}
