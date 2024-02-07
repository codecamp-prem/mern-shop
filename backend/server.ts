import express, { Express, Request, Response } from "express";
import products from "./data/products.js";
const port = 5000;

const app: Express = express();
app.get("/", (req: Request, res: Response) => {
  res.send("API is running, backend");
});

app.get("/api/products", (eq: Request, res: Response) => {
  res.json(products);
});

app.get("/api/products", (eq: Request, res: Response) => {
  res.json(products);
});

app.listen(port, () => console.log(`Server running on port:${port}`));
