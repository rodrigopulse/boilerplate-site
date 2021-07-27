import User from '../schemas/User'
class UsersController {
  async add(req, res) {
    try {
      const user = await User.create(req.body)
      return res.status(201).json(user._id)
    } catch (err) {
      console.log('erro: ', err)
      return res.status(400).json({ message: 'Ocorreu um erro', error: err })
    }
  }
  async get(req, res) {
    try {
      const users = await User.find()
      users.forEach((res) => {
        delete res.password
      })
      return res.status(200).json(users)
    } catch (err) {
      return res.status(400).json({ message: 'Ocorreu um erro', error: err })
    }
  }
}

export default new UsersController()
