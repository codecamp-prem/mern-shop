import { Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";

// @desc      Create new Order
// @route     POST /api/orders
// @access    Private
const addOrderItems = asyncHandler(async (req: Request, res: Response) => {
  res.send("add order itesm");
});

// @desc      Get Logged in User Order
// @route     GET /api/orders/myorders
// @access    Private
const getMyOrders = asyncHandler(async (req: Request, res: Response) => {
  res.send("get my order items");
});

// @desc      Get Order by id
// @route     GET /api/orders/:id
// @access    Private/Admin
const getOrderById = asyncHandler(async (req: Request, res: Response) => {
  res.send("get order item by ID");
});

// @desc      Update Order to paid
// @route     GET /api/orders/:id/pay
// @access    Private
const updateOrderToPaid = asyncHandler(async (req: Request, res: Response) => {
  res.send(
    "update order to paid after PayPal ok transaction or other payment Method Ok"
  );
});

// @desc      Update Order to delivered
// @route     POST /api/orders/:id/deliver
// @access    Private/Admin
const updateOrderToDelivered = asyncHandler(
  async (req: Request, res: Response) => {
    res.send("Update order to deliver");
  }
);

// @desc      Get All Orders
// @route     GET /api/orders
// @access    Private/Admin
const getAllOrders = asyncHandler(async (req: Request, res: Response) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getAllOrders,
  getMyOrders,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
};
