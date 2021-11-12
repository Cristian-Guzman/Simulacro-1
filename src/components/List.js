import React, {useState} from 'react';
import '../styles/List.css';

export const List = () => {

    const [info, setInfo] = useState([]);
    // let contenido = {};
    const getData = async () => {
        const response = await fetch('https://srpint2.herokuapp.com/tamales');
        const data = await response.json();
        setInfo(data);
    }
    getData()

    const deleteData = async(id) => {
        await fetch('https://srpint2.herokuapp.com/tamales/'+ id, {
            method: 'DELETE'
        })
    }

    return (
        <div>
            <table className="tabla">
                {/* <h1>Agrega un nuevo alimento</h1> */}
                <thead>
                    <tr>
                        <th>Tipo de alimento</th>
                        <th>Sabor</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        info.map( ({ precio, sabor, imagen, id }) => {

                            return (<tr key={imagen}>
                                <th>Tamal</th>
                                <th>{sabor}</th>
                                <th>{precio}</th>
                                <th><img alt=" " width="50" height="50" src={imagen} /></th>
                                <botton className="btnEliminar" onClick={() => deleteData(id)}>Eliminar</botton>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
