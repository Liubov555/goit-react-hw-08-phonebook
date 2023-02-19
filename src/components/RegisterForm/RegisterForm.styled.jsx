import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 5px;
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  padding: 0 1em;
  margin: 0.5em 1em;
  width: 350px;
  height: 35px;
  border-radius: 25px;
  border: none;
  background: #eee;
  box-shadow: inset 5px 5px 10px #d1cdc7, inset -2.5px -2.5px 5px #ffffff;
  &:hover {
    background: #f2f2f2;
   
  }
  &:focus {
    background: #fff;
    
  }
`;
export const Button = styled.button`
  width: 215px;
  height: 35px;
  border-radius: 25px;
  color: white;
  border: none;
  font-size: 1em;
  margin: 5px ;
  background: #77b6ce;
  box-shadow: 5px 5px 10px #d1cdc7, -5px -5px 10px #ffffff;
  &:hover {
    background: #f1b83b;
  }
  &:active {
    background: #f1b83b;
    box-shadow: inset 7px 7px 38px #e37c4f, inset -7px -7px 38px #ffa076;
  }
`;