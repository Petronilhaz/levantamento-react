import { createContext, useState } from "react";

const defaultValue = {
    colunms: 0,
    createdForm: {}
}

const FormContext = createContext(defaultValue)

const FormProvider = ({ children }) => {
    const [colunms, setColunms] = useState(defaultValue.colunms)
    const [createdForm, setCreatedForm] = useState(defaultValue.createdForm)

    return (
        <FormContext.Provider
        value={{colunms, setColunms, createdForm, setCreatedForm}}>
            {children}
        </FormContext.Provider>
    )
}

export { FormContext, FormProvider }