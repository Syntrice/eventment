import { z } from "zod"

/**
 * Schema for registration form. Currently, only some light validation has been added.
 */
const RegisterFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(), // trim removes whitespace
  password: z.string().trim().min(1, { message: "Please enter a password." }),
})

export default RegisterFormSchema
