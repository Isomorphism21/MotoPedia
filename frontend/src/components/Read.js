import axios from "axios";
import React, {useEffect, useState} from "react";
import {Table, Button, TableBody} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default function Read(APIURL){
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`${APIURL.APIURL}/get`)
          .then((response) => {
            console.log(response.data);
            setAPIData(response.data);
          });
        
      }, [APIURL]);

    const setData = (data) => {
        const {_id, modelo, tipo, cuerpodeaceleracion, abs, cilindraje, descripcion, imagen, marca} = data;
        localStorage.setItem("ID", _id);
        localStorage.setItem("Modelo", modelo);
        localStorage.setItem("Tipo", tipo);
        localStorage.setItem("CuerpoAceleracion", cuerpodeaceleracion);
        localStorage.setItem("Abs", abs);
        localStorage.setItem("Cilindraje", cilindraje);
        localStorage.setItem("Descripcion", descripcion);
        localStorage.setItem("Imagen", imagen);
        localStorage.setItem("Marca", marca);
    }

    const getData = async ()=>{
        try {
            const data = await axios.get(`${APIURL.APIURL}/get`);
            setAPIData(data.data);
            
            
        } catch (error) {
            console.log(error);
        }
    }

    const onDelete = async (id)=>{
        try {
            await axios.delete(`${APIURL.APIURL}/del/${id}`);
            getData();
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Modelo</Table.HeaderCell>
                        <Table.HeaderCell>Tipo</Table.HeaderCell>
                        <Table.HeaderCell>Cuerpo De Aceleracion</Table.HeaderCell>
                        <Table.HeaderCell>ABS</Table.HeaderCell>
                        <Table.HeaderCell>Cilindraje</Table.HeaderCell>
                        <Table.HeaderCell>Descripcion</Table.HeaderCell>
                        <Table.HeaderCell>Eliminar</Table.HeaderCell>
                        <Table.HeaderCell>Actualizar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
             <TableBody>

                {
                    APIData.map((data) => {
                        return(
                            <Table.Row>
                                <Table.Cell>{data.modelo}</Table.Cell>
                                <Table.Cell>{data.tipo}</Table.Cell>
                                <Table.Cell>{data.cuerpodeaceleracion}</Table.Cell>
                                <Table.Cell>{data.abs}</Table.Cell>
                                <Table.Cell>{data.cilindraje}</Table.Cell>
                                <Table.Cell>{data.descripcion}</Table.Cell>
                                <Link to={`/update/${data.marca}`}>
                                    <Table.Cell>
                                        <Button onClick={() => {setData(data)}}>Actualizar</Button>
                                    </Table.Cell>
                                </Link>
                                    <Table.Cell>
                                        <Button onClick={() => {onDelete(data._id)}}>Eliminar</Button>
                                    </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
             </TableBody>
            </Table>
        </div>
    )
}