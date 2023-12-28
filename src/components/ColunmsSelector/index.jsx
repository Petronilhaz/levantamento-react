import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from "./schema"
import { FormContext } from "../../context/context";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import * as S from "./style/index";

const ColunmsSelector = () => {
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });
  const { setColunms } = useContext(FormContext);
  const { showState, setShowState } = useContext(FormContext);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const onSubmit = (data) => {
    if(errors.colunmNumber !== undefined){
      return
    }
    else{
      setColunms(Number(data["colunmNumber"]));
      setShowState({ selector: false, create: true, userForm: false })
    } 
  };

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
          
          {...register("colunmNumber")}
        >
          {numbers.map((n, index) => {
            return (
              <MenuItem key={index} value={n} sx={{ textAlign: "center" }}>
                {n}
              </MenuItem>
            );
          })}
        </TextField>
        <S.Span>{errors?.colunmNumber?.message}</S.Span>

        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: "10px", textTransform: "capitalize" }}
          type="submit"
        >
          Enviar
        </Button>
      </S.Form>
    </S.FormBox>
  );
};

export { ColunmsSelector };
