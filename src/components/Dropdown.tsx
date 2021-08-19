import styled, {css} from "styled-components";
import React, {useCallback, useRef, useState} from "react";
import {useClickOutside} from "@Hooks";

// First child is the toggle
// Second child is body
type DropdownMenuPropsT = {
  children: [React.ReactNode, React.ReactNode];
  // left: right: 0;
  // right: left: 0;
  direction?: 'left' | 'right'
}

export function Dropdown({children, direction='left'}: DropdownMenuPropsT): JSX.Element {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  // outside means .. not a descendant of the ref.current
  // so click the dropdown body won't dismiss the dropdown
  const clickOutsideHandle = useCallback(() => {
    setShow(false)
  }, [])
  useClickOutside(ref, clickOutsideHandle)
  return (
    <DropdownMenuContainer ref={ref}>
      <DropdownMenuToggleContainer onClick={(ev) => {
        setShow(!show)
      }}>
        {children[0]}
      </DropdownMenuToggleContainer>
      <DropdownMenuBodyContainer show={show} direction={direction}>
        {children[1]}
      </DropdownMenuBodyContainer>
    </DropdownMenuContainer>
  )
}

const DropdownMenuContainer = styled.div`
  position: relative;
`

const DropdownMenuToggleContainer = styled.div`

`

type DropdownMenuBodyContainerPropsT = {
  show: boolean;
  direction: 'left' | 'right'
}

const DropdownMenuBodyContainer = styled.div<DropdownMenuBodyContainerPropsT>`
  position: absolute;
  ${
    props => props.direction === 'left'
    ? css`right: 0;`
    : css`left: 0;`
  }
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
  border: 1px solid ${props => props.theme.colors.dropdown.border};
  border-top: none;
`
