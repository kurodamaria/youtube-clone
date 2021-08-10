import { css } from 'styled-components'

import { CssUsePlayAnimation } from '@Styles'

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
  display: flex;
  padding: 0.5em 1em;
  white-space: nowrap;
  border: 0;
`

export const CssIconButton = css`
  ${CssButton}
  align-items: center; // avoid stretch
  padding: 0.3em 0.3em;
  border-radius: 50%; // I can't override this for some reaason
  font-size: inherit;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
  &:active {
     background-color: ${props => props.theme.white90};
  } 
`
