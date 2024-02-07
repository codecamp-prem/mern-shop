import express, { Express } from "express";
//import products from "../data/products";
import { getProductById, getProducts } from "../controllers/productController";

const router: Express = express();

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
