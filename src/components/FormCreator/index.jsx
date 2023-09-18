import { FormContext } from "../../context/context";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as S from "./style/index";

const FormCreator = () => {
  const { colunms, setColunms } = useContext(FormContext);
  const { register, handleSubmit } = useForm();
  const { createdForm, setCreatedForm } = useContext(FormContext);
  const { showState, setShowState } = useContext(FormContext);
  const onSubmit = (data) => setCreatedForm(data);
  const colunmsArray = Array.from({ length: colunms }, (_, index) => ({
    id: index + 1,
  }));

  useEffect(()=>{
    console.log("UseEffect do createdForm: ", createdForm);
  },[createdForm])

  return (
    <S.RegisterBox display={showState.creator}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.GridBox>
          {colunmsArray.map((colunms, index) => {
            index++;
            return (
              <S.InputBox key={index}>
                <S.Label htmlFor={"input-" + index}>
                  Digite o nome da {index}º coluna
                </S.Label>
                <br />
                <S.Input
                  required
                  id={"input-" + index}
                  type="text"
                  {...register("input-" + index)}
                />
                <br />
                <br />
              </S.InputBox>
            );
          })}
        </S.GridBox>
        <S.ButtonBox>
          <S.ResetButton type="reset">Resetar Campos</S.ResetButton>
          <S.SubmitButton type="submit" onClick={() => setShowState({ selector: false, creator: false, userForm: true})} >Criar Levantamento</S.SubmitButton>
        </S.ButtonBox>
      </form>
    </S.RegisterBox>
  );
};

export { FormCreator };
