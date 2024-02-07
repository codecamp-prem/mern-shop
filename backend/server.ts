import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
dotenv.config();

import products from "./data/products.js";
const port = process.env.PORT || 5000;

const app: Express = express();
app.get("/", (req: Request, res: Response) => {
  res.send("API is running, backend");
});

app.get("/api/products", (req: Request, res: Response) => {
  res.json(products);
});

app.get("/api/products/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p.product_id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server running on port:${port}`));
