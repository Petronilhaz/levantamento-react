import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../../context/context";
import { ButtonBox, SubmitButton, ResetButton } from "../FormCreator/style";
import * as S from "../FormCreator/style/index";
const UserForm = () => {
  const { createdForm, setCreatedForm } = useContext(FormContext);
  const { register, handleSubmit } = useForm();
  const formColunms = [];
  const formArray = Object.entries(createdForm);
  const onSubmit = (data) => console.log("Dados registrados: ", data);
  for (let i = 0; i < formArray.length; i++) {
    formColunms.push(formArray[i][1]);
  }

  return (
    <S.RegisterBox>
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
