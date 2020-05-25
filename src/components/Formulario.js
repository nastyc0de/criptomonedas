import React,{useState, useEffect} from 'react'; 
import styled from '@emotion/styled';
import Error from '../components/Error';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';

const Boton =  styled.button`
    margin-top:20px;
    font-weight:bold;
    font-size: 20px;
    padding:10px;
    background-color: #66a2fe;
    border:none;
    width:100%;
    border-radius:10px;
    color:white;
    transition:background-color .3s ease;

    &:hover{
        background-color:#326ac0;
        cursor: pointer;
    }
`;


const Formulario = ({setMoneda, setCriptomoneda}) => {

    // state del listado de criptomonedas
    const [listacriptomoneda, setListacriptomoneda] = useState([]);
    const [error, setError] = useState(false);

    const MONEDAS = [
        {codigo:'USD', nombre:'Dolares americanos'},
        {codigo:'BO', nombre:'Peso boliviano'},
        {codigo:'EUR', nombre:'Euro'},
        {codigo:'GBP', nombre:'Libra'}
    ]

    const [moneda, SeleccionarMoneda] =useMoneda('Elige tu moneda puto', '', MONEDAS);
    const [criptomoneda, SeleccionarCriptomoneda] = useCriptomoneda('Elige tu criptomoneda', '',listacriptomoneda);
    // Ejecutar el llamado a la API
    useEffect(() => {
        const consultarAPI = async() => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

            const resultado = await axios.get(url);
            setListacriptomoneda(resultado.data.Data);

        }
        consultarAPI();
    }, []);
    // cuando el usuario hace submit

    const cotizarMoneda = e => {
        e.preventDefault();

        // validar si ambos casos estan siendo usados
        if(moneda === '' || criptomoneda === ''){
            setError(true);
            return;
        }
        setError(false);
        setMoneda(moneda);
        setCriptomoneda(criptomoneda)
    }
    return ( 
        <form
            onSubmit = {cotizarMoneda}
        >
            {error ? <Error mensaje='Hay un error. Todos los campos son obligatorios'/>:null}
            <SeleccionarMoneda/>
            <SeleccionarCriptomoneda/>
            
            <Boton type="submit">Calcular</Boton>    
        </form>
     );
}
 
export default Formulario;