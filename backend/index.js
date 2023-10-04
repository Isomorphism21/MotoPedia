import express from "express";
import dotenv from "dotenv";
import yamahaRouter from "./routes/yamaha.js";
import hondaRouter from "./routes/honda.js";
import suzukiRouter from "./routes/suzuki.js";
import kawasakiRouter from "./routes/kawasaki.js";
import cors from "cors";

dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`inicializado en ${process.env.PORT}`);
});

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());
app.use("/yamaha", yamahaRouter);
app.use("/honda", hondaRouter);
app.use("/suzuki", suzukiRouter);
app.use("/kawasaki", kawasakiRouter);