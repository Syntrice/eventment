import { z } from "zod"

const CreateEventFormSchema = z.object({
  title: z.string().min(5, { message: "Title must be 5 characters or more." }),
  description: z.string().optional(),
  date: z.date({ message: "Date must be included." }),
})

export default CreateEventFormSchema
