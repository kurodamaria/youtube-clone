import {IconContext, IconType} from "react-icons";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {ClickableCss} from "@Styles";

type GuideNavItemPropsT = {
  Icon: IconType;
  desc: string;
  href: string;
}
export function GuideNavItem(props: GuideNavItemPropsT):JSX.Element {
  return (
    <NavLink to={props.href} exact activeStyle={{color: 'red'}}>
     <Wrapper>
       <IconContext.Provider value={{size: '1.5rem'}}>
         <props.Icon />
       </IconContext.Provider>
       <div>{props.desc}</div>
     </Wrapper>
    </NavLink>
  )
}

const Wrapper = styled.div`
  ${ClickableCss};
  display: flex;
  align-items: center;
  & > *:first-child {
    margin-right: 1.5rem;
  }
  & > div {
    color: ${props => props.theme.colors.text};
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  padding: 0 1.5rem;
  height: 40px;
`