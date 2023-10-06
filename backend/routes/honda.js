import express from "express";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";

const router = express.Router();
dotenv.config();

const uri = process.env.MONGO_URI;
const nombreBase = "bikedata";
const honda = "honda";

router.get("/get", async (req, res) => {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection(honda);
        const result = await collection.aggregate([{
            $lookup: {
                from: "tiposdemotos",
                localField: "tipo",
                foreignField: "_id",
                as: "tiposdemotos"
            },
        },
        {
            $unwind: "$tiposdemotos"
        },
        {
            $project: {
                _id: 1,
                modelo: 1,
                tipo: 1,
                cuerpodeaceleracion: 1,
                abs: 1,
                cilindraje: 1,
                descripcion: 1,
                imagen: 1,
                marca: 1,
                "tiposdemotos.tipomoto": 1
            }
        }
        ]).toArray();
        res.json(result);
        await client.close();
    } catch (error) {
        console.log(error);
    }
});

router.post("/post", async (req, res) => {
    try {
        const {modelo, tipo, cuerpodeaceleracion, abs, cilindraje, descripcion, marca, imagen} = req.body;
        const tipoNuevoId = new ObjectId(tipo);
        const datosIngresar = {
            modelo,
            tipo: tipoNuevoId,
            cuerpodeaceleracion,
            abs,
            cilindraje,
            descripcion,
            marca,
            imagen
        }
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection(honda);
        const result = await collection.insertOne(datosIngresar);
        res.json(result);
        await client.close();
    } catch (error) {
        console.log(error);
    }
});

router.delete("/del/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection(honda);
        const result = await collection.deleteOne({_id: new ObjectId(id)});
        res.json(result);
        await client.close();
    } catch (error) {
        console.log(error);
    }
});

router.put("/put/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const {modelo, tipo, cuerpodeaceleracion, abs, cilindraje, descripcion, marca, imagen} = req.body;
        const tipoNuevoId = new ObjectId(tipo);
        const datosIngresar = {
            modelo,
            tipo: tipoNuevoId,
            cuerpodeaceleracion,
            abs,
            cilindraje,
            descripcion,
            marca,
            imagen
        }
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection(honda);
        const result = await collection.replaceOne({_id: new ObjectId(id)}, datosIngresar);
        res.json(result);
        await client.close();
    } catch (error) {
        console.log(error);
    }
});



export default router;