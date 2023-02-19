import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #f1895ca2;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 5px;
  transition: all 300ms ease 0s;
  box-shadow: #2fe6be;
  align-items: center;
  box-shadow: rgb(0 0 0) 0px 1px 5px;
  &:hover  {
    opacity: 1;
    transform: scale(1);
    background: #f1895c;
    scale: 1.01;
    color: white;
    box-shadow: rgb(0 0 0 / 89%) 0px 7px 10px;
  }
  &:hover button {
    opacity: 1;
    transform: scale(1);
    transition: all 250ms ease 0s;
  }
`;

export const Button = styled.button`
  opacity: 0;
  transform: scale(0.8);
  border-radius: 5px;
  border: 1px solid rgba(14, 185, 190, 0.925);
  transition: all 250ms ease 0s;
  &:hover {
    color: rgb(255, 255, 255);
    background: linear-gradient(
      281deg,
      rgb(23 145 128) 0%,
      rgb(59 207 70) 100%
    );
  }
`;