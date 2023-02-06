import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useData } from '../../appContext';

export const Boton = (props) => {
    const navigate = useNavigate();

    const estilo = {
        width: props.ancho,
        height: props.alto,
        backgroundColor: props.colorFondo,
        borderRadius: '5px',
        border: props.borde,
        color: props.color,
        cursor: 'pointer',
        fontSize: props.fuente,
    };

    const contexto = useData();

    const handleClick = ()=>{
      navigate(props.enlace);
      contexto.cambiarId(props.id);
    };

    const estiloCambiado = {...estilo, backgroundColor: '#0C99D6'};
    const [miEstilo, setMiEstilo] = useState(estilo);
    const cambiarFondo = () => {
      setMiEstilo(estiloCambiado);
    }
    const volverColorFondo = () => {
      setMiEstilo(estilo);
    }
    
    return (
    <button
      onClick={handleClick}
      style={miEstilo}
      onMouseEnter = {cambiarFondo}
      onMouseLeave = {volverColorFondo}
      className = 'mi-boton'>
      {props.titulo}
    </button>
    )
}