import styled, {keyframes} from 'styled-components'
// Helpful metarial to learn SVG
// http://tutorials.jenkov.com/svg/index.html
type SpinnerPropsT = {
  size?: string;
  color?: string;
}
export const Spinner = ({size = '1em', color = 'black'}: SpinnerPropsT) => {
  return (
    <SpinnerSvgContainer preserveAspectRatio="xMidYMid meet" viewBox='0 0 32 32' width={size}>
      <circle cx='16' cy='16' r='10' fill='none' strokeWidth='2' stroke={color}/>
    </SpinnerSvgContainer>
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
const SpinnerSvgContainer = styled.svg`
  animation: ${Rotate} 2s linear infinite;

  & > circle {
    stroke-dasharray: 150;
    stroke-linecap: round;
    animation: ${Dash} 4s cubic-bezier(.81, .08, .14, .87) infinite;
  }
`