import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-right: 10px;
`;

export const Input = styled.input`
  margin-left: 3px;
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-image: initial;
  border-bottom: 2px solid rgb(34, 69, 145);
  outline: none;
  &::placeholder {
    text-align: start;
    color: #c24712;
  }
`;

export const FormButton = styled.button`
  border-radius: 5px;
  border: 1px solid #f1895c;
  transition: all 250ms ease 0s;
  &:hover {
    cursor: pointer;
    color: rgb(255, 255, 255);
    background: linear-gradient(
      281deg,
      rgb(23 145 128) 0%,
      rgb(59 207 70) 100%
    );
    transition: all 250ms ease 0s;
  }
`;