import styled from "@emotion/styled";

export const Label = styled.label`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  margin-left: 3px;
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-image: initial;
  border-bottom: 2px solid rgb(22, 69, 197);
  outline: none;
  ::placeholder {
    text-align: start;
    color: #c24712;
  }
`;