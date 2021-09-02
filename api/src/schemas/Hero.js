import { Schema, model } from 'mongoose'

const HeroSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    }
  },
  {
    imageDesktop: {
      type: String,
      required: true
    }
  },
  {
    collection: 'hero',
    versionKey: false,
    timestamps: true
  }
)

export default model('Hero', HeroSchema)
