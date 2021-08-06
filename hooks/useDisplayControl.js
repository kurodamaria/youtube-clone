import { useState } from 'react'
import { css } from 'styled-components'
/**
 *
To use the hook,
style your component with styled and CssDisplayControl.
Then use useDisplayControl inside the *parent* Component
and pass the second element of the returned value to the
child component. Finally setup setShouldDisplay according to
some other states.
 */

export function useDisplayControl (initial) {
  const [hide, setShouldHide] = useState(typeof initial === 'boolean' ? initial : false)
  return [hide, setShouldHide]
}

export const CssDisplayControl = css`
  // powerful devil mask
  // can override media queries
  // switch display fron none to whatever will start all the animation
  // display: none pauses animation
  // display: ${props => props.hide ? 'none' : ''};
  // while visibility will block the element below
  visibility: ${props => props.hide ? 'hidden' : 'visible'} !important;
  // remove from document flow
  position: ${props => props.hide ? 'fixed' : ''}
`
