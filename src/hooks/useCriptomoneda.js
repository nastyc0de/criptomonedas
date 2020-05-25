import React,{Fragment,useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family:'Bebas Neue', cursive;
    color:#fff;
    text-transform:uppercase;
    font-weight:bold;
    font-size:2.4rem;
    margin-top:2rem;
    display:block;
`;
const Select = styled.select`
    width:100%;
    display:block;
    padding:1rem;
    -webkit-appearance:none;
    border-radius:10px;
    border:none;
    font-size:1.2rem;
`;


const useCriptomoneda = (label, stateInicial, options) => {
    
    // State de nuestro custom hook
    const [state, setState] = useState(stateInicial);

    const SeleccionarCriptomoneda = () => (
        <Fragment>
        <Label>{label}</Label>
            <Select 
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">Seleccione uno</option>
                {options.map(option => (
                    <option key={option.CoinInfo.Id} value ={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                ))}
            
            </Select>
        
    </Fragment>
    );
    // Retornar un state, intefaz y funcion que modifica el state
    return [state, SeleccionarCriptomoneda, setState]
    
    
}
export default useCriptomoneda;