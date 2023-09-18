import { createContext, useState } from "react";

const defaultValue = {
    colunms: 0,
    createdForm: {},
    showState: {
        selector: true,
        creator: false,
        userForm: false
    },
    formData: []
}

const FormContext = createContext(defaultValue)

const FormProvider = ({ children }) => {
    const [colunms, setColunms] = useState(defaultValue.colunms)
    const [createdForm, setCreatedForm] = useState(defaultValue.createdForm)
    const [formData, setFormData] = useState(defaultValue.formData)
    const [showState, setShowState] = useState(defaultValue.showState)

    return (
        <FormContext.Provider
            value={{ colunms, setColunms, createdForm, setCreatedForm, showState, setShowState, formData, setFormData }}>
            {children}
        </FormContext.Provider>
    )
}

export { FormContext, FormProvider }