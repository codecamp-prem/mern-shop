import { Request, Response } from "express";
import prisma from "../../prisma/client";
import asyncHandler from "../middleware/asyncHandler";

// @desc      Auth user & get token
// @route     POST /api/users/login
// @access    Public
const authUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email: email },
    include: {
      admins: true,
    },
  });

  if (user) {
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.admins.length,
    });
  } else {
    res.status(401);
    throw new Error(`Invalid Email or Password`);
  }
});

// @desc      Register User
// @route     POST /api/users
// @access    Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  res.send("register user");
});

// @desc      Logout user & clear cookie
// @route     POST /api/users/logout
// @access    Private
const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  res.send("logout user");
});

// @desc      Get user Profile
// @route     GET /api/users/profile
// @access    Private
const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
  res.send("get user Profile");
});

// @desc      Update user Profile
// @route     PUT /api/users/profile
// @access    Private
const updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
  res.send("update user Profile");
});

// @desc      Get users
// @route     GET /api/users
// @access    Private/Admin
const getUsers = asyncHandler(async (req: Request, res: Response) => {
  res.send("get users for Admin user");
});

// @desc      Get user by ID
// @route     GET /api/users/:id
// @access    Private/Admin
const getUserById = asyncHandler(async (req: Request, res: Response) => {
  res.send("get user by ID for Admin user");
});

// @desc      Delete users
// @route     DELETE /api/users/:id
// @access    Private/Admin
const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  res.send("Delete users by Admin user");
});

// @desc      Update users
// @route     PUT /api/users/:id
// @access    Private/Admin
const updateUser = asyncHandler(async (req: Request, res: Response) => {
  res.send("update user by ID by Admin user");
});

export {
  authUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  logoutUser,
  registerUser,
  updateUser,
  updateUserProfile,
};
