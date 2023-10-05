import express from "express";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";

const router = express.Router();
dotenv.config();

const uri = process.env.MONGO_URI;
const nombreBase = "bikedata";
const tipoMoto = "tiposdemotos";

router.get("/get", async (req, res) => {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection(tipoMoto);
        const result = await collection.find().toArray();
        res.json(result);
        await client.close();
    } catch (error) {
        console.log(error);
    }
});

export default router;