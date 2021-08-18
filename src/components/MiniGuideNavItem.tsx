import {IconContext, IconType} from "react-icons";
import styled from "styled-components";
import {ClickableCss} from "@Styles";
import {NavLink} from "react-router-dom";

type MiniGuideNavItemPropsT = {
  Icon: IconType;
  desc: string;
  href: string;
}

// will be replaced with routes in the future
export function MiniGuideNavItem(props: MiniGuideNavItemPropsT): JSX.Element {
  return (
    <NavLink to={props.href}
             activeStyle={{color: 'red'}}
             exact
    >
      <Wrapper
      >
        <IconContext.Provider value={{size: '1.5rem', style: {marginBottom: '6px'}}}>
          <props.Icon/>
        </IconContext.Provider>
        <DescSpan>
          {props.desc}
        </DescSpan>
      </Wrapper>
    </NavLink>

  )
}

const Wrapper = styled.div`
  ${ClickableCss};
  background-color: transparent;
  height: var(--mini-guide-nav-item-height);
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const DescSpan = styled.span`
  font-size: 0.625rem;
`