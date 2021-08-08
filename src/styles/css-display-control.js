import { css } from 'styled-components'

export const CssDisplayControl = css`
  // powerful devil mask
  // can override media queries
  // switch display fron none to whatever will start all the animation
  // display: none pauses animation
  // display: ${props => props.hide ? 'none' : ''} !important;
  // display: ${props => props.show ? props.display : ''} !important;
  // while visibility will block the element below
  visibility: ${props => props.hide ? 'hidden' : ''} !important;
  // remove from document flow
  position: ${props => props.hide ? 'fixed' : ''} !important;
  
  visibility: ${props => props.show ? 'visible' : ''} !important;
  position: ${props => props.show ? props.position : ''} !important;
`
