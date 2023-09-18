import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { FormContext } from "../../context/context";
import * as S from "./style/index";

const ColunmsSelector = () => {
  const { register, handleSubmit } = useForm();
  const { colunms, setColunms } = useContext(FormContext);
  const { isSelectorActive, setIsSelectorActive } = useContext(FormContext);
  const { showState, setShowState } = useContext(FormContext);
  const onSubmit = (data) => {
    setColunms(Number(data["colunm-number"]));
    console.log("Data: ", Number(data["colunm-number"]));
  };

  useEffect(() => {
    console.log("UseEffect do showState: ", showState);
  }, [showState]);
  return (
    <S.FormBox display={showState.selector}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Label htmlFor="colunms">Quantas colunas devem haver ?</S.Label>
        <br />
        <S.Select htmlFor="colunms" {...register("colunm-number")}>
          <S.Option value="1">1</S.Option>
          <S.Option value="2">2</S.Option>
          <S.Option value="3">3</S.Option>
          <S.Option value="4">4</S.Option>
          <S.Option value="5">5</S.Option>
          <S.Option value="6">6</S.Option>
          <S.Option value="7">7</S.Option>
          <S.Option value="8">8</S.Option>
          <S.Option value="9">9</S.Option>
          <S.Option value="10">10</S.Option>
        </S.Select>
        <S.Button type="submit" onClick={() => setShowState({ selector: false, create: true, userForm: false})}>
          Enviar
        </S.Button>
      </form>
    </S.FormBox>
  );
};

export { ColunmsSelector };
