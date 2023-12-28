import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../../context/context";
import { ButtonBox } from "../FormCreator/style";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import * as S from "../FormCreator/style/index";

const UserForm = () => {
  const { createdForm, setFormData, showState } = useContext(FormContext);
  const { register, handleSubmit } = useForm();

  const formColunms = [];
  const formArray = Object.entries(createdForm);
  const onSubmit = (data) => setFormData((prevState) => [...prevState, data]);

  for (let i = 0; i < formArray.length; i++) {
    formColunms.push(formArray[i][1]);
  }

  return (
    <S.RegisterBox display={showState.userForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.GridBox>
          {formColunms.map((colunm, index) => {
            return (
              <S.InputBox key={index}>
                <TextField
                  size="small"
                  variant="outlined"
                  label={colunm}
                  required
                  helperText="Insira os dados aqui"
                  {...register(colunm)}
                />
              </S.InputBox>
            );
          })}
        </S.GridBox>

        <ButtonBox>
          <Button
            sx={{
              marginRight: "2.5px",
              width: "20%",
              textTransform: "capitalize",
            }}
            variant="contained"
            type="reset"
          >
            Resetar Campos
          </Button>
          <Button
            sx={{
              marginLeft: "2.5px",
              width: "20%",
              textTransform: "capitalize",
            }}
            variant="contained"
            type="submit"
          >
            Registrar
          </Button>
        </ButtonBox>
      </form>
    </S.RegisterBox>
  );
};

export { UserForm };
