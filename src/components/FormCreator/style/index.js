import styled from "styled-components";

export const RegisterBox = styled.div`
  display: ${props => props.display === false ? "none" : "flex"};
//  margin-top: 50px;

  form {
    width: 100%;
  }
`;

export const GridBox = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const InputBox = styled.div`
  margin: 10px;
  width: fit-content;
`;

export const Label = styled.label`
  font-size: 20px;
`

export const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
