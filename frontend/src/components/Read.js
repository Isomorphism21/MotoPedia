import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory, useParams } from "react-router-dom";
import { FaMotorcycle } from "react-icons/fa";


export default function Read(APIURL) {

    const { url } = useParams();
    let nombre;

    if (url === "yamaha") {
        nombre = "yamaha";
    } else if (url === "honda") {
        nombre = "honda";
    } else if (url === "kawasaki") {
        nombre = "kawasaki";
    } else if (url === "suzuki") {
        nombre = "suzuki";
    }
    const history = useHistory();
    const [APIData, setAPIData] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get(`${APIURL.APIURL}/get`)
            .then((response) => {
                console.log(response.data);
                setAPIData(response.data);
            });

    }, [APIURL]);

    const setData = (data) => {
        const { _id, modelo, tipo, cuerpodeaceleracion, abs, cilindraje, descripcion, imagen, marca, tiposdemotos } = data;
        localStorage.setItem("ID", _id);
        localStorage.setItem("Modelo", modelo);
        localStorage.setItem("Tipo", tipo);
        localStorage.setItem("CuerpoAceleracion", cuerpodeaceleracion);
        localStorage.setItem("Abs", abs);
        localStorage.setItem("Cilindraje", cilindraje);
        localStorage.setItem("Descripcion", descripcion);
        localStorage.setItem("Imagen", imagen);
        localStorage.setItem("Marca", marca);
        localStorage.setItem("TipoReal", tiposdemotos.tipomoto);
    }

    const setActualizar = (data) => {
        const { _id, modelo, tipo, cuerpodeaceleracion, abs, cilindraje, descripcion, imagen, marca, tiposdemotos } = data;
        localStorage.setItem("ID", _id);
        localStorage.setItem("Modelo", modelo);
        localStorage.setItem("Tipo", tipo);
        localStorage.setItem("CuerpoAceleracion", cuerpodeaceleracion);
        localStorage.setItem("Abs", abs);
        localStorage.setItem("Cilindraje", cilindraje);
        localStorage.setItem("Descripcion", descripcion);
        localStorage.setItem("Imagen", imagen);
        localStorage.setItem("Marca", marca);
        localStorage.setItem("TipoReal", tiposdemotos.tipomoto);
        history.push(`/update/${marca}`);
        window.location.reload();
    }

    const getData = async () => {
        try {
            const data = await axios.get(`${APIURL.APIURL}/get`);
            setAPIData(data.data);


        } catch (error) {
            console.log(error);
        }
    }

    const onDelete = async (id) => {
        try {
            await axios.delete(`${APIURL.APIURL}/del/${id}`);
            getData();
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"10px"}}>
                <Button className="btn-warning" onClick={() => {history.push(`/create/${APIData[0].marca}`); window.location.reload()}}>
                    <FaMotorcycle size={50}/>
                </Button>
            </div>
            <div>
                {
                    APIData.map((data) => {
                        return (
                            <div className="card-horizontal">
                                <div className="card-horizontal-image">
                                    <img
                                        style={{ maxWidth: "100%", height: "auto" }}
                                        src={data.imagen}
                                        alt="Imagen"
                                    />
                                </div>
                                <div className="card-horizontal-nuevo">
                                    <div className="cardTitulo">
                                        <h3 style={{ fontSize: "50px" }}>{data.modelo}</h3>
                                    </div>
                                    <div className="cardTexto">
                                        <p className="cambiartamaño">
                                            {data.descripcion}
                                        </p>
                                    </div>
                                    <div style={{display: "flex"}}>
                                        <div>
                                            <Button variant="dark" onClick={() => { handleShow(); setData(data); }}>
                                                Detalles
                                            </Button>
                                        </div>
                                        <div>
                                            <Button className="btn-danger" onClick={() => { onDelete(data._id) }}>
                                                Eliminar
                                            </Button>
                                        </div>
                                        <div>
                                            <Button className="btn-warning" onClick={() => {setActualizar(data); }}>
                                                Actualizar
                                            </Button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })
                }
                <div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton className="bg-dark" style={{color:"white"}}>
                            <Modal.Title>Detalles</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="bg-dark" style={{color:"white"}}>
                            <p>Modelo: {localStorage.getItem("Modelo")}</p>
                            <p>Tipo De Moto: {localStorage.getItem("TipoReal")}</p>
                            <p>Cuerpo De Aceleracion: {localStorage.getItem("CuerpoAceleracion")}</p>
                            <p>ABS: {localStorage.getItem("Abs")}</p>
                            <p>Cilindraje: {localStorage.getItem("Cilindraje")}</p>
                            <p>Descripcion: {localStorage.getItem("Descripcion")}</p>
                        </Modal.Body>
                        <Modal.Footer className="bg-dark" style={{color:"white"}}>
                            <Button variant="dark" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    )
}