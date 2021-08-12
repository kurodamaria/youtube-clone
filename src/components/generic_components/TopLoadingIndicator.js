import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import { CssDisplayControl } from 'src/styles'
import styled, { css } from 'styled-components'

// Warning: The indicator is faked
// and doesn't represent the actual page loading progress
//
// Yeah, the fucking fake indicator.
//
// the indicator will always procede around 75% ([65%, 75%]) in 0.5s
// Time Passwd              percentage
// 20ms                     [0%, 25%]
// 200ms                    [35%, 55%]
// 500ms                    [65%, 75%]
// and whether the loading will procede to 100% depends on whether the
// event routeChangeComplete emits or not
//
// Color                    Meaning
// red                      Loading
// green                    Loading successful
// yellow                   Loading Failed
// Yeah, they are not normal colors, they are glowing fucking cool colors

const TheProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  right: 0;
  height: 2px;
  width: 100%;
  background-color: ${props => props.color};
  box-shadow: 0px 0px 3px 0px ${props => props.color};
  transition: transform 0.2s,
              visibility 0.2s,
              opacity 0.2s;
  opacity: 1;
  transform: translateX(${props => props.progress}%);
  ${
    props => props.progress === 100
    ? css`
      opacity: 0;
    `
    : ''
  }
  z-index: 9999;
  ${CssDisplayControl}
`

function useHandleRouteChangeEvent (router, evLastName, handle) {
  useEffect(() => {
    router.events.on('routeChange' + evLastName, handle)
    return () => {
      router.events.off('routeChange' + evLastName, handle)
    }
  }, [evLastName, handle, router])
}

// inclusive
function randomIntFromRange (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const TopLoadingIndicator = () => {
  const [progress, setProgress] = useState(0)

  const handleStart = useCallback(() => {
    setProgress(randomIntFromRange(0, 75))
  }, [])
  const handleComplete = useCallback(() => {
    setProgress(100)
  }, [])

  const router = useRouter()
  useHandleRouteChangeEvent(router, 'Start', handleStart)
  useHandleRouteChangeEvent(router, 'Complete', handleComplete)
  return (
    <TheProgressBar
      hide={progress === 0 || progress === 100}
      color={progress === 100 ? 'green' : 'red'}
      progress={progress}
    />
  )
}
