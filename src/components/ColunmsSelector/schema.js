import { string, object } from "yup"

const schema = object({
  colunmNumber: string("Valor inválido").required("Campo obrigatório")
})

  export { schema }