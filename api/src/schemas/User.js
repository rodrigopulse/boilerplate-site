import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },
    name: String,
    password: String
  },
  {
    collection: 'users',
    versionKey: false,
    timestamps: true
  }
)

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  try {
    this.password = await bcrypt.hash(this.password, 12)
    return next()
  } catch (err) {
    return next(err)
  }
})

export default model('User', UserSchema)
