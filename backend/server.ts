import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
dotenv.config();

import { errorHandler, notFound } from "./middleware/errorMiddleware";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";

const port = process.env.PORT || 5000;

const app: Express = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Cookie parser middleware
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("API is running, backend");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

/* not found and other error handler */
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port:${port}`));
