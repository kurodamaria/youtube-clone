import { css } from 'styled-components'

// this will overridde inline styles and media queries without !important
export const CssDisplayControl = css`
  // switch display fron none to whatever will start all the animation
  // display: none pauses animation
  // display: ${props => props.hide ? 'none' : ''} !important;
  // display: ${props => props.show ? props.display : ''} !important;

  // if hide is undefined then the two rules will simply ignored by the browser
  // whether to hide element
  visibility: ${props => props.hide === undefined ? '' : props.hide === true ? 'hidden' : 'visible'} !important;
  // remove from document flow
  position: ${props => props.hide === undefined ? props.position : props.hide === true ? 'fixed' : props.position} !important;
`

export const CSSDC = css`
  display: ${props => props.hide === undefined ? '' : props.hide ? 'none' : props.display} !important;
`

export const CSSVPC = css`
  visibility: ${props => props.hide === undefined ? '' : props.hide === true ? 'hidden' : 'visible'} !important;
  // remove from document flow
  position: ${props => props.hide === undefined ? props.position : props.hide === true ? 'fixed' : props.position} !important;
`
