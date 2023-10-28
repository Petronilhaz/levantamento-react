import { FormContext } from "../../context/context";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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

  useEffect(() => {
    console.log("UseEffect do createdForm: ", createdForm);
  }, [createdForm]);

  return (
    <S.RegisterBox display={showState.creator}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.GridBox>
          {colunmsArray.map((colunms, index) => {
            index++;
            return (
              <S.InputBox key={index}>
                
                <TextField
                  size="small"
                  label={`Digite o nome da ${index}º coluna`}
                  // sx={{ marginTop: "10px"}}
                  fullWidth
                  required
                  id={"input-" + index}
                  type="text"
                  {...register("input-" + index)}
                />
                
                
              </S.InputBox>
            );
          })}
        </S.GridBox>
        <S.ButtonBox>
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
            onClick={() =>
              setShowState({ selector: false, creator: false, userForm: true })
            }
          >
            Criar Levantamento
          </Button>
        </S.ButtonBox>
      </form>
    </S.RegisterBox>
  );
};

export { FormCreator };
