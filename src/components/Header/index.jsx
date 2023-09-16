import * as S from './style/style'
import CHIP from '../../images/CHIP.png'

const Header = () => {
    return(
        <>
        <S.Header>
            <img src={CHIP} alt="CCT" height='100px' />
            <S.Title>Coordenadoria de Ciência e Tecnologia</S.Title>
        </S.Header>
        </>
    )
}

export { Header }