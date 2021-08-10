// Opens a layer that is 100% the size of the viewport
// and disables interactions below the layer
// An element is below the layer if it's z-index is smaller than the layer's

import styled from 'styled-components'

import { CssDisplayControl, CssFixed, CssModalTransition } from '@Styles'
import { useDisableDocumentScroll, useResizeObserver } from '@Hooks'
import { useState } from 'react'
import { useEffect, useRef } from 'react/cjs/react.development'

// className and style are here to allow styled to work with this component
// *Core has functionality and unstyled elements
// * is a styled *Core
// The benefit of this approach is that we can pass props that both *Core and * accepts
// Otherwise *Core will hide the styled *'s props
// And we could access the styled component's props, just like the hide prop below
// Note: Animation won't work because we have to pass a playAnimation propo to the component and
// use usePlayAnimation() at the same level
function ModalLayerCore ({ className, style, onClick, shouldDisable }) {
  useDisableDocumentScroll(shouldDisable)
  return (
    <div className={className} style={style} onClick={onClick} />
  )
}

export const ModalLayer = styled(ModalLayerCore)`
  // enable fixed position
  ${CssFixed}
  // enable display control
  ${CssDisplayControl}
  // enable transition
  ${CssModalTransition}

  // tweaks
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  // enable to set background color
  background-color: ${props => props.backgroundColor};
  // hide is from ${CssDisplayControl}
  opacity: ${props => props.hide ? '0' : props.opacity};
`
