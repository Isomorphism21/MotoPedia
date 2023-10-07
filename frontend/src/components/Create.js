import axios from "axios";
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
            window.location.reload();
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
        <div className="formularioEdit">
            <div style={{display:"flex", justifyContent:"center"}}>
                <h1>CREAR</h1>
            </div>
      <Form className="editForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Modelo</Form.Label>
          <Form.Control type="text" placeholder="Modelo" onChange={(e) => setModelo(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Tipo De Motocicleta</Form.Label>
            <Form.Select onChange={(e) => setTipo(e.target.value)} aria-label="Default select example">
                {Array.isArray(data) && data.map((element) => (
                    <option key={element._id} value={element._id}>{element.tipomoto}</option>          
                ))}
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Cuerpo De Aceleración</Form.Label>
            <Form.Control type="text" placeholder="Cuerpo De Aceleración" onChange={(e) => setCuerpoDeAceleracion(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>ABS</Form.Label>
            <Form.Control type="text" placeholder="ABS" onChange={(e) => setAbs(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Cilindraje</Form.Label>
            <Form.Control type="text" placeholder="Cilindraje" onChange={(e) => setCilindraje(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" placeholder="Descripcion" onChange={(e) => setDescripcion(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="text" placeholder="Descripcion" onChange={(e) => setImagen(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" onClick={() => {postData()}}>
          Crear
        </Button>
      </Form>
    </div>
    )
}