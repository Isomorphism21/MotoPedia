import express from "express";
import dotenv from "dotenv";
import yamahaRouter from "./routes/yamaha.js";
import hondaRouter from "./routes/honda.js";
import suzukiRouter from "./routes/suzuki.js";
import kawasakiRouter from "./routes/kawasaki.js";
import tipoMotoRouter from "./routes/tipoMoto.js";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import documentacion from "./swagger/documentacion.js";
import swaggerJSDoc from "swagger-jsdoc";

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
app.use("/tipoMoto", tipoMotoRouter);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(documentacion)));