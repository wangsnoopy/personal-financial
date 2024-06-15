import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from 'cors';

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string = "mongodb+srv://financetracker:Personal2024@personalfinancetracker.asli1nf.mongodb.net/"

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!!"))
    .catch((err) => console.error("FAILED TO CONNECTED TO MONGODB!!:",err));


app.use("/financial-records", financialRecordRouter);


app.listen(port, () =>{
    console.log(`Server Running on Port ${port}`);
});