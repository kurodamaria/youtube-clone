import styled from 'styled-components'
import { DivContainer } from './Containers'

const TheDivider = styled.div`
  width: ${props => props.length};
  height: ${props => props.stroke};
  background-color: ${props => props.color};
`

// Note align uses justify-content
export function HDivider ({ length, stroke, color, align, marginY }) {
  return (
    <DivContainer display='flex' width='100%' justifyContent={align} margin={marginY + ' 0'}>
      <TheDivider length={length} stroke={stroke} color={color} />
    </DivContainer>
  )
}
