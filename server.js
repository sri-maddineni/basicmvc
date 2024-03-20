import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors";
import dataRoutes from "./routes/dataRoutes.js"
//configure environment
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


//routes all
app.use("/api/v1/datar", dataRoutes);


//rest api
app.get("/", (req, res) => {
  res.send({message:"hello wrold"});
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on ${PORT} `.bgCyan.white);
});



