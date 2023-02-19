import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderLink = styled(NavLink)`
    color: #f1b83b;
    text-decoration: none;

   font-weight: bold;
      &.active {
border-bottom: 2px solid  #f1b83b;
padding-bottom: 5px;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    cursor: pointer;
  }

`;

export const Nav = styled.nav`
`;