import styled from "styled-components";

export const FormBox = styled.div`
  display: ${ props => props.display === false ? "none" : "flex"};
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 30%;
`

export const Label = styled.label`
  font-size: 20px;
`;

export const Select = styled.select`
  width: 100%;
  height: 50%;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
`;

export const Option = styled.option`
  font-size: 20px;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 30%;
  margin: 15px 0 0 2.5px;
  padding: 10px 25px;
  color: white;
  background-color: gray;
  border: none;
  cursor: pointer;
`;

export const Span = styled.span`
  font-size: 12px;
  color: red;
`
