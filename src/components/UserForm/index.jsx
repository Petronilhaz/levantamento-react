import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../../context/context";

const UserForm = () => {
  const { createdForm, setCreatedForm } = useContext(FormContext)
  const { register, handleSubmit } = useForm();
  const formColunms = [];
  const formArray = Object.entries(createdForm);
  const onSubmit = (data) => console.log("Dados registrados: ", data);
  for (let i = 0; i < formArray.length; i++) {
    formColunms.push(formArray[i][1]);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formColunms.map((colunm, index) => {
        return (
          <div key={index}>
            <label htmlFor={colunm}>{colunm}</label>
            <br />
            <input type="text" {...register(colunm)} />
            <br />
          </div>
        );
      })}

      <button type="submit">Registrar</button>
    </form>
  );
};

export { UserForm };
