import { useClickOutside, useStateObject, useMediaQueryT } from '@Hooks'
import { createContext, useMemo, useRef } from 'react'
import { useCallback, useEffect } from 'react/cjs/react.development'
import { css } from 'styled-components'

// Three states of the Header
function toMax655NormalHeader ({ SearchFormState, BackButtonState, SASearchButtonState, LRState }) {
  SearchFormState.setShow(false)
  BackButtonState.setShow(false)
  SASearchButtonState.setShow(true)
  LRState.setShow(true)
}

function toMax655SearchingHeader ({ SearchFormState, SearchFormInputState, BackButtonState, SASearchButtonState, LRState }) {
  SearchFormState.setShow(true)
  SearchFormInputState.setFocus(true)
  BackButtonState.setShow(true)
  SASearchButtonState.setShow(false)
  LRState.setShow(false)
}

function isInMax655Searching ({ SearchFormState, BackButtonState, SASearchButtonState, LRState }) {
  return (SearchFormState.show === true) &&
    (BackButtonState.show === true) &&
    (SASearchButtonState.show === false) &&
    (LRState.show === false)
}

function toMin656Header ({ SearchFormState, SASearchButtonState, BackButtonState, LRState }) {
  SearchFormState.setShow(true)
  SASearchButtonState.setShow(false)
  BackButtonState.setShow(false)
  LRState.setShow(true)
}

function useHeaderLayoutManager ({ SearchFormState, SearchFormInputState, SASearchButtonState, BackButtonState, LRState }) {
  const HeaderLayout = useMemo(() => ({
    SearchFormState, SearchFormInputState, SASearchButtonState, BackButtonState, LRState
  }), [BackButtonState, LRState, SASearchButtonState, SearchFormState, SearchFormInputState])

  const min656Handle = useCallback(() => {
    toMin656Header(HeaderLayout)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const max655Handle = useCallback(() => {
    if (HeaderLayout.SearchFormInputState.focus) {
      toMax655SearchingHeader(HeaderLayout)
    } else {
      if (!isInMax655Searching(HeaderLayout)) {
        toMax655NormalHeader(HeaderLayout)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [HeaderLayout.SearchFormInputState.focus])

  const clickOutsideHandle = useCallback(() => {
    if (isInMax655Searching(HeaderLayout)) {
      toMax655NormalHeader(HeaderLayout)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useMediaQueryT('(min-width: 656px)', min656Handle)
  useMediaQueryT('(max-width: 655px)', max655Handle)
  useClickOutside(HeaderLayout.CenterRef, clickOutsideHandle)
}

// States of LSisde
// Note: DrawerLockState is less important and adds more tidiousness,
// so I set it in onClickDrawerStateToggler rather than in these state functions
function toNoDrawer ({ MiniDrawerState, DrawerState, DrawerModalState }) {
  MiniDrawerState.setShow(false)
  DrawerState.setShow(false)
  DrawerModalState.setShow(false)
}

function toDrawerWithOverlay ({ MiniDrawerState, DrawerState, DrawerModalState }) {
  MiniDrawerState.setShow(false)
  DrawerState.setShow(true)
  DrawerModalState.setShow(true)
}

function toMiniDrawer ({ MiniDrawerState, DrawerState, DrawerModalState }) {
  MiniDrawerState.setShow(true)
  DrawerState.setShow(false)
  DrawerModalState.setShow(false)
}

function toDrawerOverMiniDrawer ({ MiniDrawerState, DrawerState, DrawerModalState }) {
  MiniDrawerState.setShow(true)
  DrawerState.setShow(true)
  DrawerModalState.setShow(true)
}

function toDrawer ({ MiniDrawerState, DrawerState, DrawerModalState }) {
  MiniDrawerState.setShow(false)
  DrawerState.setShow(true)
  DrawerModalState.setShow(false)
}

function useLSideLayoutManager ({ MiniDrawerState, DrawerState, DrawerLockState, DrawerModalState }) {
  const LSideLayout = useMemo(() => ({
    MiniDrawerState, DrawerState, DrawerLockState, DrawerModalState
  }), [DrawerState, DrawerLockState, DrawerModalState, MiniDrawerState])

  const max807Handler = useCallback(() => {
    // fuck, it should be simpler without those shitty "state functions"
    if (LSideLayout.DrawerState.show) {
      console.log('max807Handler, toDrawerWithOverlay')
      toDrawerWithOverlay(LSideLayout)
    } else {
      console.log('max807Handler, toNoDrawer')
      toNoDrawer(LSideLayout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [LSideLayout.DrawerState.show])

  const min808Handler = useCallback(() => {
    if (LSideLayout.DrawerState.show) {
      console.log('min808Handler, toDrawerOverMiniDrawer')
      toDrawerOverMiniDrawer(LSideLayout)
    } else {
      console.log('min808Handler, toMiniDrawer')
      toMiniDrawer(LSideLayout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [LSideLayout.DrawerState.show])

  const max1328Handler = useCallback(() => {
    toMiniDrawer(LSideLayout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const min1329Handler = useCallback(() => {
    // well, this should be more complex without those amazing state functions XD
    if (LSideLayout.DrawerLockState.lock) {
      console.log('min1329Handler, toMiniDrawer, becuase Drawer is locked')
      toMiniDrawer(LSideLayout)
    } else {
      console.log('min1329Handler, toDrawer')
      toDrawer(LSideLayout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [LSideLayout.DrawerLockState.lock])
  useMediaQueryT('(max-width: 807px)', max807Handler)
  useMediaQueryT('(min-width: 808px) and (max-width: 1327px)', min808Handler)
  useMediaQueryT('(max-width: 1328px)', max1328Handler)
  useMediaQueryT('(min-width: 1329px)', min1329Handler)
}

// Three states of the RSide
function toMarginLeft0 ({ ContentState }) {
  ContentState.setMarginLeft('0')
}

function toMarginLeftMiniDrawerWidth ({ ContentState }) {
  ContentState.setMarginLeft(
    'var(--mini-drawer-width)'
  )
}

function toMarginLeftDrawerWidth ({ ContentState }) {
  ContentState.setMarginLeft(
    'var(--drawer-width)'
  )
}

function useRSideLayoutManager ({ MiniDrawerState, DrawerState, ContentState }) {
  const RSideLayout = useMemo(() => ({
    ContentState
  }), [ContentState])
  useEffect(() => {
    if (MiniDrawerState.show === true) {
      toMarginLeftMiniDrawerWidth(RSideLayout)
    } else if (window.innerWidth >= 1329 && DrawerState.show === true) {
      toMarginLeftDrawerWidth(RSideLayout)
    } else {
      toMarginLeft0(RSideLayout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DrawerState.show, MiniDrawerState.show])
}

// Note the reducer returns nothing because it calls setState
function useLayoutManager (layoutStates) {
  useHeaderLayoutManager(layoutStates)
  useLSideLayoutManager(layoutStates)
  useRSideLayoutManager(layoutStates)
}

export const LayoutContext = createContext()
export const LayoutContextProvider = ({ children }) => {
  /* Header States */
  const LRState = useStateObject('show', true)

  const SearchFormState = useStateObject('show', true)
  const SearchFormInputState = useStateObject('focus', true)
  const SASearchButtonState = useStateObject('show', true)
  const BackButtonState = useStateObject('show', true)
  const CenterRef = useRef()

  /* LSide States */
  const DrawerState = useStateObject('show', true)
  const DrawerModalState = useStateObject('show', true)
  const DrawerLockState = useStateObject('lock', false)
  const MiniDrawerState = useStateObject('show', true)

  /* RSide States */
  const ContentState = useStateObject('marginLeft', '0')

  const onClickSASearchButton = useCallback(() => {
    toMax655SearchingHeader({
      SASearchButtonState,
      SearchFormState,
      SearchFormInputState,
      BackButtonState,
      LRState
    })
  }, [BackButtonState, LRState, SASearchButtonState, SearchFormState, SearchFormInputState])

  const onClickBackButton = useCallback(() => {
    toMax655NormalHeader({
      SearchFormState,
      BackButtonState,
      SASearchButtonState,
      LRState
    })
  }, [BackButtonState, LRState, SASearchButtonState, SearchFormState])

  const onClickDrawerToggler = useCallback(() => {
    console.log('onClickDrawerToggler')
    if (window.innerWidth >= 1329) {
      if (DrawerState.show) {
        console.log('lock Drawer and go toMiniDrawer')
        DrawerLockState.setLock(true)
        toMiniDrawer({ MiniDrawerState, DrawerState, DrawerModalState })
      } else {
        console.log('unlock Drawer and toDrawer')
        DrawerLockState.setLock(false)
        toDrawer({ MiniDrawerState, DrawerState, DrawerModalState })
      }
    } else if (window.innerWidth >= 808) {
      if (DrawerState.show) {
        console.log('toMiniDrawer')
        toMiniDrawer({ MiniDrawerState, DrawerState, DrawerModalState })
      } else {
        console.log('toDrawerOverMiniDraer')
        toDrawerOverMiniDrawer({ MiniDrawerState, DrawerState, DrawerModalState })
      }
    } else {
      if (DrawerState.show) {
        console.log('toNoDrawer')
        toNoDrawer({ MiniDrawerState, DrawerState, DrawerModalState })
      } else {
        console.log('toDrawerWithOverlay')
        toDrawerWithOverlay({ MiniDrawerState, DrawerState, DrawerModalState })
      }
    }
  }, [DrawerState, DrawerLockState, DrawerModalState, MiniDrawerState])

  const onClickDrawerModalLayer = useCallback(() => {
    if (window.innerWidth >= 808) {
      toMiniDrawer({ MiniDrawerState, DrawerState, DrawerModalState })
    } else {
      toNoDrawer({ MiniDrawerState, DrawerState, DrawerModalState })
    }
  }, [DrawerModalState, DrawerState, MiniDrawerState])

  const layoutStates = useMemo(() => ({
    LRState,
    CenterRef,
    SearchFormState,
    SearchFormInputState,
    BackButtonState,
    SASearchButtonState,
    DrawerLockState,
    DrawerModalState,
    MiniDrawerState,
    ContentState,
    DrawerState
  }), [BackButtonState, ContentState, DrawerState, DrawerLockState, DrawerModalState, LRState, MiniDrawerState, SASearchButtonState, SearchFormState, SearchFormInputState])

  useLayoutManager(layoutStates)
  return (
    <LayoutContext.Provider value={{ ...layoutStates, onClickSASearchButton, onClickBackButton, onClickDrawerToggler, onClickDrawerModalLayer }}>
      {children}
    </LayoutContext.Provider>
  )
}

export const LayoutCSSVars = css`
  --header-height: 56px;
  --header-font-size: 1.5rem;
  --header-center-max-width: 728px;
  --drawer-width: 240px;
  --mini-drawer-width: 72px;
  --content-margin-top: var(---header-height);
`
