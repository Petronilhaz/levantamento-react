import styled from 'styled-components'

export const FormBox = styled.div`
display: flex;
justify-content: center; 

 label {
    font-size: 20px;
 }
 select {
    width: 100%;
    height: 50%;
    font-size: 20px;
    text-align: center;
    margin-top: 10px;

    option {
        font-size: 20px;
        text-align: center;
    }
 }

 button {
      width: 100%;
      height: 30%;
      margin-top: 15px;
       background-color: gray;
       border: none;
 }

`