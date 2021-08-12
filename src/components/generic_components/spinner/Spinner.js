import styled, { keyframes } from 'styled-components'

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
    stroke-dasharray: 150;
    stroke-dashoffset: 150;
  }
  100% {
    stroke-dasharray: 150;
    stroke-dashoffset: 0;
  }
`

export const Spinner = styled(SpinnerCore)`
  animation: ${Rotate} 2s infinite;
  & > circle {
    stroke: ${props => props.color};
    stroke-linecap: round;
    animation: ${Dash} 2s infinite; 
  }
`
