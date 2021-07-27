import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },
    name: String
  },
  {
    collection: 'users',
    versionKey: false,
    timestamps: true
  }
)

export default model('User', UserSchema)
