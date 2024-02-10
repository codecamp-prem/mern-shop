import z from "zod";

export const signupSchema = z.object({
  name: z.string().min(4, { message: "Must be 4 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password Must be 6 or more characters long" }),
  confirmPassword: z.string().min(6, { message: "Same as Password" }),
});
export const loginSchema = z.object({
  email: z.string().email({ message: "Email address is required." }),
  password: z.string().min(6, { message: "Password is required." }),
});
