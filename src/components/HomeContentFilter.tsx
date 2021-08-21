import styled from "styled-components";
import {useCallback, useContext, useRef, useState} from "react";
import {HomeContentFilterContext} from "../context/HomeContentFilterContext";
import {IconButton} from "./IconButton";
import {MdArrowBack, MdArrowForward} from "react-icons/all";
import {useResizeObserver} from "../hooks/useResizeObserver";

const scrollX = 400

export function HomeContentFilter() {
  const filterContext = useContext(HomeContentFilterContext)
  const ref = useRef<HTMLDivElement>(null!)
  const resizeHandle = useCallback(() => {
    if (ref.current) {
      setShowLeft(ref.current.scrollLeft - scrollX > 0)
      setShowRight(ref.current.scrollLeft + scrollX + ref.current.clientWidth < ref.current.scrollWidth)
    }
  }, [])

  // BTW this will also set the initial value, because the browser will fire a resize event
  // before or after the initial painting, idk, but it will do.
  useResizeObserver(ref, resizeHandle)

  const [showLeft, setShowLeft] = useState<boolean>(true)
  const [showRight, setShowRight] = useState<boolean>(true)

  return (
    <Container>
      {
        showLeft ?
          <LeftContainer>
            <ControllerContainer>
              <LeftController onClick={() => {
                ref.current.scrollBy({
                  left: -scrollX,
                  behavior: 'smooth'
                })
                // 200 is the scroll distance this click, because of the animation the value will be delayed
                setShowLeft(ref.current.scrollLeft - scrollX > 0)
                setShowRight(ref.current.scrollLeft - scrollX + ref.current.clientWidth < ref.current.scrollWidth)
              }}/>
            </ControllerContainer>
            <LeftControllerFadeCover/>
          </LeftContainer> : null
      }
      <SwitchContainer ref={ref}>
        {
          filterContext.filters.map((filter, index) =>
            <FilterSwitch
              onClick={() => {
                filterContext.setCurrentFilter(index)
              }}
              current={filterContext.currentFilter === index}
            >{filter}
            </FilterSwitch>)
        }
      </SwitchContainer>
      {
        showRight ?
          <RightContainer>
            <RightControllerFadeCover/>
            <ControllerContainer>
              <RightController onClick={() => {
                ref.current.scrollBy({
                  left: scrollX,
                  behavior: 'smooth'
                })
                // 200 is the scroll distance this click, because of the animation the value will be delayed
                console.log('scrollLeft', ref.current.scrollLeft, 'clientWidth', ref.current.clientWidth)
                setShowLeft(ref.current.scrollLeft + scrollX > 0)
                setShowRight(ref.current.scrollLeft + scrollX + ref.current.clientWidth < ref.current.scrollWidth)
              }}/>
            </ControllerContainer>
          </RightContainer> : null
      }
    </Container>
  )
}

const Container = styled.div`
  position: sticky;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  height: var(--home-content-filter-height);
  background-color: hsl(0, 0%, 100%);
  border-top: 1px solid hsl(0, 0%, 80%);
  border-bottom: 1px solid hsl(0, 0%, 80%);
  display: flex;
  justify-content: center;
`
const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 0 1.5rem;
`
type FilterSwitchPropsT = {
  current: boolean;
}
const FilterSwitch = styled.div<FilterSwitchPropsT>`
  height: 30px;
  font-size: 0.875rem;
  line-height: 1.25em;
  border-radius: 233333333333333px;
  margin: 0.75rem 0.75rem 0.75rem 0;
  padding: 0 0.75rem;
  border: 1px solid black;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.1s;
  color: ${props => props.current ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 0%)'};
  background-color: ${props => props.current ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 95%)'};

  &:hover {
    background-color: ${props => props.current ? 'hsl(0, 0%, 40%)' : 'hsl(0, 0%, 90%)'};
  }
`
const LeftContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
`
const RightContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
`
const ControllerContainer = styled.div`
  width: 56px;
  background-color: hsl(0, 0%, 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`
const LeftControllerFadeCover = styled.div`
  width: 50px;
  background-image: linear-gradient(to right, hsla(0, 0%, 100%, 100%), hsla(0, 0%, 100%, 30%));
`

const RightControllerFadeCover = styled.div`
  width: 50px;
  background-image: linear-gradient(to left, hsla(0, 0%, 100%, 100%), hsla(0, 0%, 100%, 30%));
`

const LeftController = styled(IconButton).attrs({iconSize: '1rem', Icon: MdArrowBack})`
  height: 2rem;
  width: 2rem;
`
const RightController = styled(IconButton).attrs({iconSize: '1rem', Icon: MdArrowForward})`
  height: 2rem;
  width: 2rem;
`
