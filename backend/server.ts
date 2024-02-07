import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
dotenv.config();

import productRoutes from "./routes/productRoutes";
const port = process.env.PORT || 5000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("API is running, backend");
});

app.use("/api/products", productRoutes);

app.listen(port, () => console.log(`Server running on port:${port}`));
