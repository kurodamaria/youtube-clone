import styled, {css} from "styled-components";
import React, {useState} from "react";

type ControlledClickableWrapperPropsT = {
  play: boolean;
}

const ControlledClickableWrapper = styled.div<ControlledClickableWrapperPropsT>`
  transition: box-shadow 0.3s,
  background-color 0.3s;
  box-shadow: inset 0 0 0 0 ${props => props.theme.colors.clickable.boxShadow};
  background-color: ${props => props.theme.colors.clickable.bg};
  ${
          props => props.play ? css`
            transition: none;
            background-color: ${props => props.theme.colors.clickable.activeBg};
            box-shadow: inset 0 0 0 3px transparent;
          ` : ''
  }
`
type ControlledClickableContainerPropsT = {
  stop: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// So if you want to stop the clickable style
// handle the onMouseDown and prevent it from propagation
// For simple apply and forget click effect
// check src/styles/ClickableCss.ts
function _ControlledClickableContainer(props: ControlledClickableContainerPropsT) {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
  return (
    <ControlledClickableWrapper
      play={isMouseDown && !props.stop}
      onMouseDown={() => {
        setIsMouseDown(true)
      }}
      onMouseUp={() => {
        setIsMouseDown(false)
      }}
      className={props.className}
      style={props.style}
    >
      {props.children}
    </ControlledClickableWrapper>
  )
}
// yeah, eh, whatever, there is a reason i do this but i don't want to explain
export const ControlledClickable = styled(_ControlledClickableContainer)``