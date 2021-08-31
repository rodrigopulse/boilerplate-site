import Hero from '../schemas/Hero'

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
}

export default new HeroController()
