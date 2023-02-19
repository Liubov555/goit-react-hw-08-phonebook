import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AuthLink = styled(NavLink)`
    text-decoration: none;
    color: white ;
    padding: 8px 16px;
    background-color: #77b6ce ;
    border-radius: 10px;
    transform: translateY(480px);
 cursor: pointer;

 
  :hover,
  :focus-visible {
   
background-color:  #f1b83b;
    
  }
`;

export const Navigation = styled.div`
    display: flex;
    justify-content: space-evenly;
`;