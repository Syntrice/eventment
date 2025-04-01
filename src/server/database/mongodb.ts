import mongoose from "mongoose"
const { MONGODB_CONNECTION_STRING } = process.env

if (!MONGODB_CONNECTION_STRING) {
  throw "MongoDB connection string not found. Please provide MONGODB_CONNECTION_STRING environment variable."
}

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      MONGODB_CONNECTION_STRING as string
    )
    console.log("Connected to mongodb database.")
    if (connection.readyState === 1) {
      return Promise.resolve(true)
    }
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}
