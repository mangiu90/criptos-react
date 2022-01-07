import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Precio = styled.p`
    font-style: 18px;
    span {
        font-weight: 700;
    }
`

const Texto = styled.p`
    font-style: 24px;
    span {
        font-weight: 700;
    }
`

const Cotizacion = ({
    cotizacion,
}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion

    return (
        <Contenedor>
            <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
            <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio mas alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio mas bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Cotizacion
