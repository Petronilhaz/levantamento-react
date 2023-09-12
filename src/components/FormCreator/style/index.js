import styled from 'styled-components'
import { FormContext } from '../../../context/context'

 export const RegisterBox = styled.div`
 display: flex; 
 margin-top: 50px;
 
 form {
display: grid;
grid-template-columns: repeat(4, 1fr);

div {
    margin: 30px ;
}
 }
 `