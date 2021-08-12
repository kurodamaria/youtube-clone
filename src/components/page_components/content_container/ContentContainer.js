import { useLeftPanelWidth } from 'src/hooks/useLeftPanelWidth'
import styled from 'styled-components'

const ContentContainerCore = styled.div`
  margin-top: var(--masthead-height);
  margin-left: ${props => props.ml};
  text-align: center;
  background-color: ${props => props.theme.white95};
  border-radius: 0.2em;
`

export const ContentContainer = ({ children, className, style }) => {
  const ml = useLeftPanelWidth()
  return (
    <ContentContainerCore ml={ml} className={className} style={style}>
      {children}
    </ContentContainerCore>
  )
}
