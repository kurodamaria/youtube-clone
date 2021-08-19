import {css} from "styled-components";

// The unstoppable click effect, wait till :has has support :(
// for stoppable click effect see src/components/ControlledClickable.tsx
export const ClickableCss = css`
  transition: box-shadow 0.3s,
  background-color 0.3s;
  box-shadow: inset 0 0 0 0 ${props => props.theme.colors.clickable.boxShadow};
  background-color: ${props => props.theme.colors.clickable.bg};
  &:active:hover {
    transition: none;
    background-color: ${props => props.theme.colors.clickable.activeBg};
    box-shadow: inset 0 0 0 3px transparent;
  }
`