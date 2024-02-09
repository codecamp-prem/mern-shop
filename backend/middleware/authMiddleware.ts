import jwt from "jsonwebtoken";
import prisma from "../../prisma/client";
import asyncHandler from "./asyncHandler";

//protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Read the JWT from the cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);

      //   {
      //     "userId": "clpwd2y930000134cw40gnoAd",
      //     "iat": 1707469398,
      //     "exp": 1710061398
      //   }

      req.user = await prisma.user.findUnique({
        where: { id: decoded!.userId },
        select: {
          id: true,
          name: true,
          email: true,
          emailVerified: true,
          image: true,
          admins: true,
        },
      });

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

// Admin middleWare
const admin = (req, res, next) => {
  if (req.user && req.user.admins.length) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized, As Admin");
  }
};

export { admin, protect };
