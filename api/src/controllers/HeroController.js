import Hero from '../schemas/Hero'
import { renameImage } from '../utils'
class HeroController {
  async add(req, res) {
    try {
      const hero = await Hero.create(req.body)
      return res.status(201).json(hero._id)
    } catch (err) {
      console.log('erro: ', err)
      return res.status(400).json({ message: 'Ocorreu um erro', error: err })
    }
  }
  async get(req, res) {
    try {
      const hero = await Hero.findOne()
      return res.status(200).json(hero)
    } catch (err) {
      console.log('erro: ', err)
      return res.status(400).json({ message: 'Ocorreu um erro', error: err })
    }
  }
  async update(req, res) {
    renameImage(req.file.filename, 'hero-desktop.jpg')
    req.body.heroDesktop = 'hero-desktop.jpg'
    try {
      if (!req.body._id) {
        return res.status(400).json({ message: 'Id incorreto' })
      }
      const hero = await Hero.updateOne({ _id: req.body._id }, req.body)
      console.log(hero)
      return res.status(200).json({ message: 'Atualizado com sucesso' })
    } catch (err) {
      console.log('erro: ', err)
      return res.status(400).json({ message: 'Ocorreu um erro', error: err })
    }
  }
}

export default new HeroController()
