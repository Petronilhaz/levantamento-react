import { useForm } from "react-hook-form"
import { useContext, useEffect } from "react"
import { FormContext } from "../../context/context"
import * as S from './style/index'

const  ColunmsSelector = ({ isSelectorActive , setIsSelectorActive}) => {
    const { register, handleSubmit } = useForm()
    const { colunms, setColunms } = useContext(FormContext)
    const onSubmit = data => {
        setColunms(Number(data["colunm-number"]))
        console.log("Data: ", Number(data["colunm-number"]));
        }

        useEffect(()=> {
            console.log("UseEffect do Colunms: ", colunms);
        }, [colunms])
    return (
        <S.FormBox>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="colunms">Quantas colunas devem haver ?</label>
        <br />
        <select htmlFor="colunms"
        {...register("colunm-number")}
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        <button type="submit" onClick={()=>setIsSelectorActive(false)}>Enviar</button>
        </form>
        </S.FormBox>
    )
}

export { ColunmsSelector }