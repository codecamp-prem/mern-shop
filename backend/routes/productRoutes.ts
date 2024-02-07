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
    if (product) {
      return res.json(product);
    } else {
      res.status(404);
      throw new Error("Resource not Found"); //this custom error will show as message value.
    }
  })
);

export default router;
