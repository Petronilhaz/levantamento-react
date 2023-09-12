import { FormContext } from "../../context/context"
import { useContext } from "react";
import { useForm } from "react-hook-form"; 
import * as S from "./style/index"

const FormCreator = () => {
    const {colunms, setColunms} = useContext(FormContext)
    const { register, handleSubmit  } = useForm()
    const { createdForm, setCreatedForm } = useContext(FormContext)
    const onSubmit = data => setCreatedForm(data)
    const colunmsArray = Array.from({ length: colunms }, (_, index) => ({
    id: index + 1,
  }));

  return (
    <S.RegisterBox>
    <form onSubmit={handleSubmit(onSubmit)}>
      {colunmsArray.map((colunms, index) => {
        index++;
        return (
          <div key={index}>
            <label htmlFor={"input-" + index}>
              Digite o nome da {index}º coluna
            </label>
            <br />
            <input id={"input-" + index} type="text" 
            {...register("input-" + index )}/>
            <br />
            <br />
          </div>
        );
      })}
      <button type="submit">Criar Levantamento</button>
    </form>
    </S.RegisterBox>
  );
};

export { FormCreator };
