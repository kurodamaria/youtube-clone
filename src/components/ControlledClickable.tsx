import styled, {css} from "styled-components";
import React, {createContext, useContext, useState} from "react";

type ControlledClickableContextT = {
  stop: boolean;
}

export const ControlledClickableContext = createContext<ControlledClickableContextT>({stop: false})

type ControlledClickableWrapperPropsT = {
  play: boolean;
}

const ControlledClickableWrapper = styled.div<ControlledClickableWrapperPropsT>`
  transition: box-shadow 0.3s,
  background-color 0.3s;
  box-shadow: inset 0 0 0 0 ${props => props.theme.colors.clickable.boxShadow};
  background-color: ${props => props.theme.colors.clickable.bg};
  width: fit-content;
  height: fit-content;
  ${
          props => props.play ? css`
            transition: none;
            background-color: ${props => props.theme.colors.clickable.activeBg};
            box-shadow: inset 0 0 0 3px transparent;
          ` : ''
  }
`
type ControlledClickableContainerPropsT = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// So if you want to stop the clickable style
// handle the onMouseDown and prevent it from propagation
// or
// provide the ControlledClickableContext with {stop: true}
// For simple apply and forget click effect
// check src/styles/ClickableCss.ts
function _ControlledClickableContainer(props: ControlledClickableContainerPropsT) {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
  const {stop} = useContext(ControlledClickableContext)
  return (
    <ControlledClickableWrapper
      play={isMouseDown && !stop}
      onMouseDown={() => {
        if (!stop) {
          setIsMouseDown(true)
        }
      }}
      onMouseUp={() => {
        setIsMouseDown(false)
      }}
      // just in case, just in case ...
      onMouseOut={() => {
        setIsMouseDown(false)
      }}
      className={props.className}
      style={props.style}
    >
      {props.children}
    </ControlledClickableWrapper>
  )
}

// yeah, eh, whatever, there is a reason for this
export const ControlledClickable = styled(_ControlledClickableContainer)``

type DisableClickableEffectPropsT = {
  children: React.ReactNode;
}

export function DisableClickableEffect(props: DisableClickableEffectPropsT) {
  return (
    <div onMouseDown={(ev) => {
      ev.stopPropagation()
    }}
    >
      {props.children}
    </div>
  )
}