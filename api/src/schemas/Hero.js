import { Schema, model } from 'mongoose'

const HeroSchema = new Schema(
  {
    title: String,
    heroDesktop: String,
    heroMobile: String
  },
  {
    collection: 'heros',
    versionKey: false,
    timestamps: true
  }
)

export default model('Hero', HeroSchema)
