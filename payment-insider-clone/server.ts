import express, { Express,Request,Response } from "express";
const app:Express = express();
import connectDB from "./connections/dbConnect";
import indexRouter from "./routes";


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", indexRouter);


// Connect to MongoDB
connectDB();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


