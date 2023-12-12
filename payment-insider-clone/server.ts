import express, { Express,Request,Response } from "express";
const app:Express = express();
import connectDB from "./connections/dbConnect";


// Connect to MongoDB
connectDB();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


