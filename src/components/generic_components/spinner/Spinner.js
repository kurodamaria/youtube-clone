import styled, { keyframes } from 'styled-components'
// Helpful metarial to learn SVG
// http://tutorials.jenkov.com/svg/index.html
const SpinnerCore = ({ className, style }) => {
  return (
    <svg className={className} viewBox='0 0 32 32'>
      <circle cx='16' cy='16' r='10' fill='none' strokeWidth='2' />
    </svg>
  )
}

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 63, 150;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 63, 150;
    stroke-dashoffset: -65;
  }
`

export const Spinner = styled(SpinnerCore)`
  animation: ${Rotate} 2s linear infinite;
  & > circle {
    stroke-dasharray: 150;
    stroke: ${props => props.color};
    stroke-linecap: round;
    animation: ${Dash} 4s cubic-bezier(.81,.08,.14,.87) infinite; 
  }
`
