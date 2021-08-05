import { css } from 'styled-components'
import {
  CssUsePlayAnimation
} from './animations'

/* Buttons */
export const CssClickable = css`
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: ${props => props.theme.white};
  &:hover {
    background-color: ${props => props.theme.white95};
  }
  &:active {
     background-color: ${props => props.theme.white90};
  } 
`

export const CssButton = css`
  ${CssClickable}
  ${CssUsePlayAnimation}
  padding: 0.5em 1em;
  white-space: nowrap;
  border: 0;
`

export const CssIconButton = css`
  ${CssButton}
  display: flex; // correct align
  padding: 0.3em 0.3em;
  border-radius: 50%;
  font-size: inherit;
  &:hover {
    background-color: ${props => props.theme.white};
  }
  &:active {
     background-color: ${props => props.theme.white90};
  } 
`
