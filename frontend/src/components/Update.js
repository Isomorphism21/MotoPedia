import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Update() {
  const { url } = useParams();
  let APIURL;

  if (url === "yamaha") {
    APIURL = "http://localhost:5200/yamaha";
  } else if (url === "honda") {
    APIURL = "http://localhost:5200/honda";
  } else if (url === "kawasaki") {
    APIURL = "http://localhost:5200/kawasaki";
  } else if (url === "suzuki") {
    APIURL = "http://localhost:5200/suzuki";
  }

  let history = useHistory();
  const [id, setID] = useState(null);
  const [modelo, setModelo] = useState("");
  const [tipo, setTipo] = useState("");
  const [cuerpodeaceleracion, setCuerpoDeAceleracion] = useState("");
  const [abs, setAbs] = useState("");
  const [cilindraje, setCilindraje] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [marca, setMarca] = useState("");
  const [data, setData] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setModelo(localStorage.getItem("Modelo"));
    setTipo(localStorage.getItem("Tipo"));
    setCuerpoDeAceleracion(localStorage.getItem("CuerpoAceleracion"));
    setAbs(localStorage.getItem("Abs"));
    setCilindraje(localStorage.getItem("Cilindraje"));
    setDescripcion(localStorage.getItem("Descripcion"));
    setMarca(localStorage.getItem("Marca"));
    setImagen(localStorage.getItem("Imagen"));
    axios.get("http://localhost:5200/tipomoto/get").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  const updateApiData = async () => {
    try {
      await axios.put(`${APIURL}/put/${id}`, {
        modelo,
        tipo,
        cuerpodeaceleracion,
        abs,
        cilindraje,
        descripcion,
        marca,
        imagen,
      });
      console.log(tipo);
      history.push(`/motos-${marca}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formularioEdit">
            <div style={{display:"flex", justifyContent:"center"}}>
                <h1>ACTUALIZACIÓN</h1>
            </div>
      <Form className="editForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Modelo</Form.Label>
          <Form.Control type="text" placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)}/>
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
            <Form.Control type="text" placeholder="Cuerpo De Aceleración" value={cuerpodeaceleracion} onChange={(e) => setCuerpoDeAceleracion(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>ABS</Form.Label>
            <Form.Control type="text" placeholder="ABS" value={abs} onChange={(e) => setAbs(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Cilindraje</Form.Label>
            <Form.Control type="text" placeholder="Cilindraje" value={cilindraje} onChange={(e) => setCilindraje(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" onClick={updateApiData}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
}
