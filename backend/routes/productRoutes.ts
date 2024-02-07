import express, { Express, Request, Response } from "express";
//import products from "../data/products";
import prisma from "../../prisma/client";
import asyncHandler from "../middleware/asyncHandler";

const router: Express = express();

router.get(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const products = await prisma.product.findMany({
      orderBy: { name: "asc" },
    });
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req: Request, res: Response) => {
    const product = await prisma.product.findUnique({
      where: { id: req.params.id },
    });
    if (!product) {
      return res.json(404).json({ message: "Product not found" });
    }
    res.json(product);
  })
);

export default router;
