import bcrypt from "bcrypt";
import { Request, Response } from "express";
import prisma from "../../prisma/client";

import asyncHandler from "../middleware/asyncHandler";
import generateToken from "../utils/generateToken";

const matchPassword = async (
  userInputPassword: string,
  hashedDBPassword: string
) => {
  return await bcrypt.compare(userInputPassword, hashedDBPassword);
};
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

  if (user && (await matchPassword(password, user.hashedPassword!))) {
    generateToken(res, user.id);
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
// @desc      Logout user & clear cookie
// @route     POST /api/users/logout
// @access    Private
const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "log out successfully!" });
});

// @desc      Register User
// @route     POST /api/users
// @access    Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExist = await prisma.user.findUnique({
    where: { email: email },
  });
  if (userExist) {
    res.status(400);
    throw new Error("User seems to already exist. Please try to login");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });
  if (newUser) {
    generateToken(res, newUser.id);
    // user.admins.length will be 0, since we don't have this user as Admin
    res.json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: 0,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data. Please try again");
  }
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
