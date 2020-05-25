import React from 'react';
import styled from '@emotion/styled';

const DivResultado = styled.div`
    color:#fff;
    font-family:'Bebas Neue', cursive;
`;
const Info = styled.p`
    font-size:18px;
    span{
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size:30px;
    span{
        font-weight:bold;
    }
`;

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    return ( 
        <DivResultado>
            <Precio>El precio es:<span>{resultado.PRICE}</span></Precio>
            <Info>El precio mas alto es:<span>{resultado.HIGHDAY}</span></Info>
            <Info>El precio mas bajo es:<span>{resultado.LOWDAY}</span></Info>
            <Info>La variacion de las ultimas 24hrs. es:<span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima actualizacion:<span>{resultado.LASTUPDATE}</span></Info>
        </DivResultado>

     );
}
 
export default Cotizacion;