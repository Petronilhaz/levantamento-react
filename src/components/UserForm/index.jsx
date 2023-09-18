import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../../context/context";
import { ButtonBox, SubmitButton, ResetButton } from "../FormCreator/style";
import * as S from "../FormCreator/style/index";
const UserForm = () => {
  const { createdForm, setCreatedForm } = useContext(FormContext);
  const { showState, setShowState } = useContext(FormContext);
  const { register, handleSubmit } = useForm();
  const { formData, setFormData } = useContext(FormContext)
  const formColunms = [];
  const formArray = Object.entries(createdForm);
  const onSubmit = (data) => setFormData((prevState) => [...prevState, data])
  for (let i = 0; i < formArray.length; i++) {
    formColunms.push(formArray[i][1]);
  }

   useEffect(()=>{
console.log("UseEffect do FormData: ", formData);
// Object.entries(formData)[increase][1].Nome da coluna)
   },[formData])

  return (
    <S.RegisterBox display={showState.userForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.GridBox>
          {formColunms.map((colunm, index) => {
            return (
              <S.InputBox key={index}>
                <S.Label htmlFor={colunm}>{colunm}</S.Label>
                <br />
                <S.Input type="text" {...register(colunm)} />
                <br />
              </S.InputBox>
            );
          })}
        </S.GridBox>

        <ButtonBox>
          <ResetButton type="reset">Resetar Campos</ResetButton>
          <SubmitButton type="submit">Registrar Valores</SubmitButton>
        </ButtonBox>
      </form>
    </S.RegisterBox>
  );
};

export { UserForm };
