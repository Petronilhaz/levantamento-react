import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { FormContext } from "../../context/context";
import { InputBox } from "../FormCreator/style";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button";
import * as S from "./style/index";

const ColunmsSelector = () => {
  const { register, handleSubmit } = useForm();
  const { colunms, setColunms } = useContext(FormContext);
  const { isSelectorActive, setIsSelectorActive } = useContext(FormContext);
  const { showState, setShowState } = useContext(FormContext);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const onSubmit = (data) => {
    setColunms(Number(data["colunm-number"]));
    console.log("Data: ", Number(data["colunm-number"]));
  };

  useEffect(() => {
    console.log("UseEffect do showState: ", showState);
  }, [showState]);
  return (
    <S.FormBox display={showState.selector}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          select
          label="Quantas colunas devem haver ?"
          sx={{
            marginTop: "10px",
            height: "50%",
            textAlign: "center",
            cursor: "pointer",
          }}
          fullWidth
          
          {...register("colunm-number")}
        >
          {numbers.map((n) => {
            return (
              <MenuItem value={n} sx={{ textAlign: "center" }}>
                {n}
              </MenuItem>
            );
          })}
        </TextField>
        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: "10px", textTransform: "capitalize" }}
          type="submit"
          onClick={() =>
            setShowState({ selector: false, create: true, userForm: false })
          }
        >
          Enviar
        </Button>
      </S.Form>
    </S.FormBox>
  );
};

export { ColunmsSelector };
