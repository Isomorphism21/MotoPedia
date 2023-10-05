import axios from "axios";
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router";
import {Button, Form} from "semantic-ui-react";
import { useParams } from "react-router-dom";

export default function Create(){
    const { url } = useParams();
    let APIURL;
  
    if (url === 'yamaha') {
      APIURL = 'http://localhost:5200/yamaha';
    } else if (url === 'honda') {
      APIURL = 'http://localhost:5200/honda';
    } else if (url === 'kawasaki') {
      APIURL = 'http://localhost:5200/kawasaki';
    } else if (url === 'suzuki') {
      APIURL = 'http://localhost:5200/suzuki';
    }

    let history = useHistory();
    const [modelo, setModelo] = useState('');
    const [tipo, setTipo] = useState('');
    const [cuerpodeaceleracion, setCuerpoDeAceleracion] = useState('');
    const [abs, setAbs] = useState('');
    const [cilindraje, setCilindraje] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');
    const [marca, setMarca] = useState(url);
    const [data, setData] = useState([]);

    const postData = () =>{
        axios.post(`${APIURL}/post`,{
            modelo, tipo, cuerpodeaceleracion, abs, cilindraje, descripcion, imagen, marca
        }).then(()=>{
            history.push(`/motos-${marca}`);
        })
    }

    useEffect(() => {
        axios.get("http://localhost:5200/tipomoto/get")
        .then((response) => {
            console.log(response.data);
            setData(response.data);
        })
    }, []);

    return(
        <div>
            <Form className='create-form'>
                <Form.Field>
                    <label>Modelo</label>
                    <input placeholder='Modelo' value={modelo} onChange={(e) => setModelo(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                <label>Tipo</label>
                    <select onChange={(e) => setTipo(e.target.value)}>
                        <option value=''>Seleccionar</option>
                        {Array.isArray(data) && data.map((element) => (
                            <option key={element._id} value={element._id}>{element.tipomoto}</option>
                        ))}
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Cuerpo De Aceleración</label>
                    <input placeholder='CuerpoDeAceleración' value={cuerpodeaceleracion} onChange={(e) => setCuerpoDeAceleracion(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Abs</label>
                    <input placeholder='Abs' value={abs} onChange={(e) => setAbs(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Cilindraje</label>
                    <input placeholder='Cilindraje' value={cilindraje} onChange={(e) => setCilindraje(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Descripcion</label>
                    <input placeholder='Descripcion' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Imagen</label>
                    <input placeholder='Imagen' value={imagen} onChange={(e) => setImagen(e.target.value)}></input>
                </Form.Field>
                <Button type='submit' onClick={postData} >Crear</Button>
            </Form>
        </div>
    )
}