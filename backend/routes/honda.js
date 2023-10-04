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
        const result = await collection.find().toArray();
        res.json(result);
        await client.close();
    } catch (error) {
        console.log(error);
    }
});

router.post("/post", async (req, res) => {
    try {
        const body = req.body;
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection(honda);
        const result = await collection.insertOne(body);
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
        const body = req.body;
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection(honda);
        const result = await collection.replaceOne({_id: new ObjectId(id)}, body);
        res.json(result);
        await client.close();
    } catch (error) {
        console.log(error);
    }
});

export default router;