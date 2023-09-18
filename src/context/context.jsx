import { createContext, useState } from "react";

const defaultValue = {
    colunms: 0,
    createdForm: {},
    showState: {
        selector: true,
        creator: false,
        userForm: false
    }
}

const FormContext = createContext(defaultValue)

const FormProvider = ({ children }) => {
    const [colunms, setColunms] = useState(defaultValue.colunms)
    const [createdForm, setCreatedForm] = useState(defaultValue.createdForm)

    const [showState, setShowState] = useState(defaultValue.showState)

    return (
        <FormContext.Provider
        value={{colunms, setColunms, createdForm, setCreatedForm, showState, setShowState}}>
            {children}
        </FormContext.Provider>
    )
}

export { FormContext, FormProvider }