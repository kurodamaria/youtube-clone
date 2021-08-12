import { Spinner } from '@GCompo'
import styled from 'styled-components'

const SpinnerContainer = styled.div`
  width: 64px;
  height: 64px;
`

const LoadingCore = ({ className, style, color }) => {
  return (
    <div className={className} style={style}>
      <SpinnerContainer>
        <Spinner color={color} />
      </SpinnerContainer>
    </div>
  )
}

export const Loading = styled(LoadingCore).attrs(props => ({ color: props.theme.white70 }))`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.white};
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
