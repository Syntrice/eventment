import mongoose, { Schema, model } from "mongoose"

export interface UserDocument {
  _id?: string
  username: string
  password: string
  createdAt?: Date
  updatedAt?: Date
}

const UserSchema = new Schema<UserDocument>(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const User = mongoose.models?.User || model<UserDocument>("User", UserSchema)

export default User

export const getUserByUsername = (username: string) => {
  return User.findOne({ username: username })
}

export const createUser = (user: UserDocument) => {
  // create and save user
  return User.create(user)
}
