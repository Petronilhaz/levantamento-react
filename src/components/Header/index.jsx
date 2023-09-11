import * as S from './style/style'
import CHIP from '../../images/CHIP.png'

const Header = () => {
    return(
        <>
        <S.Header height='100px' width='40px' backgroundColor='red'>
            <img src={CHIP} alt="" height='100px' />
            <S.Title>Coordenadoria de Ciência e Tecnologia</S.Title>
        </S.Header>
        </>
    )
}

export { Header }