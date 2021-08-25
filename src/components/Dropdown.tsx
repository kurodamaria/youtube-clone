import styled, {css} from "styled-components";
import React, {useCallback, useLayoutEffect, useRef, useState} from "react";
import {useClickOutside} from "@Hooks";

// First child is the toggle
// Second child is body
type DropdownMenuPropsT = {
  children: [React.ReactNode, React.ReactNode];
  onShow?: () => void;
  onDismiss?: () => void;
  zIndex?: number;
}

export function Dropdown(props: DropdownMenuPropsT): JSX.Element {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const bodyRef = useRef<HTMLDivElement>(null)
  // outside means .. not a descendant of the ref.current
  // so click the dropdown body won't dismiss the dropdown
  const clickOutsideHandle = useCallback(() => {
    setShow(false)
    if (props.onDismiss) {
      props.onDismiss()
    }
  }, [props])

  useClickOutside(ref, clickOutsideHandle)
  useLayoutEffect(() => {
    if (show) {
      if (bodyRef.current) {
        const rect = bodyRef.current.getBoundingClientRect()
        if (rect.x + rect.width > window.innerWidth) {
          setDirection('left')
        }
      }
    }
  }, [show])
  return (
    <DropdownMenuContainer ref={ref}>
      <DropdownMenuToggleContainer onClick={(ev) => {
        if (!show && props.onShow) {
          props.onShow()
        } else if (props.onDismiss) {
          props.onDismiss()
        }
        setShow(!show)
      }}>
        {props.children[0]}
      </DropdownMenuToggleContainer>
      <DropdownMenuBodyContainer ref={bodyRef} show={show} direction={direction} zIndex={props.zIndex}>
        {props.children[1]}
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
  direction: 'left' | 'right';
  zIndex?: number;
}

const DropdownMenuBodyContainer = styled.div<DropdownMenuBodyContainerPropsT>`
  position: absolute;
  z-index: ${props => props.zIndex};
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
