import { ColunmsSelector } from "./components/ColunmsSelector";
import { FormCreator } from "./components/FormCreator";
import { UserForm } from "./components/UserForm";
import { Header } from "./components/Header";
import { FormContext, FormProvider } from "./context/context";
import { createGlobalStyle } from "styled-components";
import { useContext } from "react";

function App() {

  const { isSelectorActive, setIsSelectorActive } = useContext(FormContext)

  return (
    <>
      <FormProvider>
        <Header />
        <ColunmsSelector  display={isSelectorActive} />
        <FormCreator />
        <UserForm />
      </FormProvider>
      <GlobalStyle />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
:root {
  width: 100%;
  height: 1024px;
  --cor-do-header: #5F5E4E;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default App;
