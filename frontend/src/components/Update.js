import React, {useEffect, useState} from "react";
import {Button, Form} from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

export default function Update(){
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
    const [id, setID] = useState(null);
    const [modelo, setModelo] = useState('');
    const [tipo, setTipo] = useState('');
    const [cuerpodeaceleracion, setCuerpoDeAceleracion] = useState('');
    const [abs, setAbs] = useState('');
    const [cilindraje, setCilindraje] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setModelo(localStorage.getItem('Modelo'));
        setTipo(localStorage.getItem('Tipo'));
        setCuerpoDeAceleracion(localStorage.getItem('CuerpoAceleracion'));
        setAbs(localStorage.getItem('Abs'));
        setCilindraje(localStorage.getItem('Cilindraje'));
        setDescripcion(localStorage.getItem('Descripcion'));
    }, []);

    const updateApiData = async () => {
        try {
            await axios.put(`${APIURL}/put/${id}`, {
                modelo, tipo, cuerpodeaceleracion, abs, cilindraje, descripcion
            });
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Modelo</label>
                    <input placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Tipo</label>
                    <input placeholder="Tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Cuerpo De Aceleraciónn</label>
                    <input placeholder="Modelo" value={cuerpodeaceleracion} onChange={(e) => setCuerpoDeAceleracion(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>ABS</label>
                    <input placeholder="Abs" value={abs} onChange={(e) => setAbs(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Cilindraje</label>
                    <input placeholder="Cilindraje" value={cilindraje} onChange={(e) => setCilindraje(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Descripcion</label>
                    <input placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></input>
                </Form.Field>
                <Button type="submit" onClick={updateApiData}>Actualizar</Button>
            </Form>
        </div>
    )
}