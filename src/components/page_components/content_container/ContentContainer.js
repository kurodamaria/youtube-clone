import { LayoutContext } from '@Context'
import { useContext } from 'react/cjs/react.development'
import styled from 'styled-components'

const ContentContainerCore = styled.div`
  margin-top: var(--header-height);
  margin-left: ${props => props.ml};
  text-align: center;
  background-color: ${props => props.theme.white95};
  border-radius: 0.2em;
`

export const ContentContainer = ({ children, className, style }) => {
  const { ContentState } = useContext(LayoutContext)
  return (
    <ContentContainerCore ml={ContentState.marginLeft} className={className} style={style}>
      {children}
    </ContentContainerCore>
  )
}
