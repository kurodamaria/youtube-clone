import { IndexPageContext, LayoutContext } from '@Context'
import { IconButton } from '@GCompo'
import { useContext, useRef, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { CssDisplayControl } from 'src/styles'
import styled, { css } from 'styled-components'

const FilterItemContainer = styled.div`
  border: 1px solid ${props => props.theme.white70};
  border-radius: 233333px;
  background-color: ${props => props.current ? props.theme.black : props.theme.white85};
  color: ${props => props.current ? props.theme.white : props.theme.black};
  flex-shrink: 0;
  flex-grow: 0;
  cursor: pointer;
  user-select: none;
  padding: 0.5em 1em;
  & + & {
    margin-left: 1em;
  }
  &:hover {
    background-color: ${props => props.theme.white70};
  }
`

const FilterItem = ({ filterId }) => {
  const { filter } = useContext(IndexPageContext)
  return (
    <FilterItemContainer
      current={filter.currentFilter === filterId}
      onClick={() => {
        filter.setCurrentFilter(filterId)
      }}
    >
      {filter.filters[filterId]}
    </FilterItemContainer>
  )
}

const FilterOptionsContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin: 0 1em;
`

const FilterContainer = styled.div`
  position: fixed;
  top: var(--header-height);
  right: 0;
  left: ${props => props.left};
  height: var(--header-height);
  z-index: 1;
  border-top: 1px solid ${props => props.theme.white70};
  border-bottom: 1px solid ${props => props.theme.white70};
  background-color: ${props => props.theme.white};
  padding: 1em 1em;
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
`

const CssScrollControllerWrapper = css`
  display: flex;
  align-items: center;
  width: 100px;
  position: absolute;
  top: 0;
  bottom: 0;
  ${IconButton} {
    font-size: 1.5em;
  }
  ${CssDisplayControl}
`

const ScrollControllerWrapperLeft = styled.div`
  ${CssScrollControllerWrapper}
  ${IconButton} {
    margin-left: 1em;
  }
  background-image: linear-gradient(to right, ${props => props.theme.white}, ${props => props.theme.white} 60%, transparent);
  left: 0;
  justify-content: flex-start;
`

const ScrollControllerWrapperRight = styled.div`
  ${CssScrollControllerWrapper}
  background-image: linear-gradient(to left, ${props => props.theme.white}, ${props => props.theme.white} 60%, transparent);
  position: absolute;
  right: 0;
  justify-content: flex-end;
  ${IconButton} {
    margin-right: 1em;
  }
`

export const Filter = () => {
  const { filter } = useContext(IndexPageContext)
  const [hideLeft, setHideLeft] = useState(true)
  const [hideRight, setHideRight] = useState(false)
  const ref = useRef()
  const left = useContext(LayoutContext).ContentState.marginLeft
  return (
    <FilterContainer left={left}>
      <ScrollControllerWrapperLeft hide={hideLeft}>
        <IconButton onClick={() => {
          ref.current.scrollBy({
            left: -200,
            behavior: 'smooth'
          })
        }}
        >
          <MdKeyboardArrowLeft />
        </IconButton>
      </ScrollControllerWrapperLeft>
      <FilterOptionsContainer
        ref={ref}
        onScroll={() => {
          setHideLeft(ref.current.scrollLeft === 0)
          setHideRight(ref.current.scrollWidth === (ref.current.scrollLeft + ref.current.offsetWidth))
        }}
      >
        {
          filter.filters.map((_, index) => <FilterItem key={index} filterId={index} />)
        }
      </FilterOptionsContainer>
      <ScrollControllerWrapperRight hide={hideRight}>
        <IconButton onClick={() => {
          ref.current.scrollBy({
            left: 200,
            behavior: 'smooth'
          })
        }}
        >
          <MdKeyboardArrowRight />
        </IconButton>
      </ScrollControllerWrapperRight>
    </FilterContainer>
  )
}
