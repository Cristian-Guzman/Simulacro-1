import React, { useState } from 'react';
import '../styles/Form.css';

export const Form = () => {
    const API = 'https://srpint2.herokuapp.com/tamales';
    const [input, setInput] = useState({
        tipo: '',
        sabor: '',
        precio: '',
        imagen: '',
        id: ''
    })

    const handleInput = ({target}) => {
        setInput( {...input, [target.name]: target.value } )
    }

    const enviarDatos = async e => {
        e.preventDefault()
        const { sabor, precio, imagen, id } = input;
        alert('a perra')
        await fetch(API, {
            method: 'POST',
            body: JSON.stringify({
                sabor,
                precio,
                imagen,
                id
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
        }})
        alert('creo que funcionó xd')
    }

    return (
        <div>
           <form id="formulario" onSubmit={enviarDatos}>
           <h2>Registro de Alimentos</h2>
           <hr/>
               <div>
                    <label>Tipo de alimento</label>
                    <input id="inputTipo" name="tipo" required onChange={(event) => handleInput(event)}/>
               </div>
               <div>
                   <label>Sabor</label>
                    <select id="selectTipo" name="sabor" required onChange={(event) => handleInput(event)}>
                        <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                        <option name="Tamal Mole" value="Tamal Mole">Tamal Mole</option>
                        <option name="Tamal Verde" value="Tamal Verde">Tamal Verde</option>
                        <option name="Tamal Pasas" value="Tamal Pasas">Tamal Pasas</option>
                        <option name="Tamal Piña" value="Tamal Piña">Tamal Piña</option>
                        <option name="Tamal Guayaba" value="Tamal Guayaba">Tamal Guayaba</option>
                   </select>
               </div>
               <div>
                    <label>Precio</label>
                    <input id="inputPrecio" type="number" required name="precio" onChange={(event) => handleInput(event)}/>
               </div>
               <div>
                    <label>Imagen</label>
                    <input id="inputImagen" type="url" name="imagen" required onChange={(event) => handleInput(event)}/>
               </div>
               <div>
                   <button id="btnRegistro">Enviar</button> 
               </div>
           </form>
        </div>
    )
}
