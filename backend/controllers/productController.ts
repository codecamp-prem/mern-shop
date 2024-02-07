import { Request, Response } from "express";
import prisma from "../../prisma/client";
import asyncHandler from "../middleware/asyncHandler";

// @desc      Fetch all products
// @route     GET /api/products
// @access    Public
const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    orderBy: { name: "asc" },
  });
  res.json(products);
});

// @desc      Fetch Single product by Id
// @route     GET /api/products/:id
// @access    Public
const getProductById = asyncHandler(async (req: Request, res: Response) => {
  const product = await prisma.product.findUnique({
    where: { id: req.params.id },
  });
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not Found"); //this custom error will show as message value.
  }
});

export { getProductById, getProducts };
