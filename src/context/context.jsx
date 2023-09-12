import { createContext, useState } from "react";

const defaultValue = {
    colunms: 0,
    createdForm: {},
    SelectorActive: true
}

const FormContext = createContext(defaultValue)

const FormProvider = ({ children }) => {
    const [colunms, setColunms] = useState(defaultValue.colunms)
    const [createdForm, setCreatedForm] = useState(defaultValue.createdForm)
    const [isSelectorActive, setIsSelectorActive] =  useState(defaultValue.SelectorActive)

    return (
        <FormContext.Provider
        value={{colunms, setColunms, createdForm, setCreatedForm, isSelectorActive, setIsSelectorActive}}>
            {children}
        </FormContext.Provider>
    )
}

export { FormContext, FormProvider }