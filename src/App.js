import { ColunmsSelector } from "./components/ColunmsSelector";
import { FormCreator } from "./components/FormCreator"
import { UserForm } from "./components/UserForm";
import { FormContext, FormProvider } from "./context/context";
import { useEffect, useContext } from "react";

function App() {
  const {colunms, setColunms} = useContext(FormContext)
  const {createdForm, setCreatedForm} = useContext(FormContext)
  

  useEffect(()=>{
    console.log("Colunms: ", colunms);
  },[colunms])

  return (
    <>
    <FormProvider>
      <ColunmsSelector />
      <FormCreator />
      <UserForm />
    </FormProvider>
    </>
  );
}

export default App;
