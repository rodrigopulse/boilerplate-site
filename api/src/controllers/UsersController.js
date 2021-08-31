import User from '../schemas/User'
import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'
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
  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (user.length === 0) {
        return res
          .status(401)
          .json({ message: 'Usuário e/ou senha incorretos - 1' })
      }
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
          const payload = { id: user._id, name: user.name, email: user.email }
          const token = jwt.encode(payload, process.env.SECRET_JWT || '')
          return res.status(200).json({
            token: token
          })
        } else if (err) {
          return res
            .status(403)
            .json({ message: 'Ocorreu um problema', error: err })
        } else {
          return res
            .status(401)
            .json({ message: 'Usuário e/ou senha incorretos - 2' })
        }
      })
    } catch (err) {
      return res
        .status(401)
        .json({ message: 'Usuário e/ou senha incorretos - 3', error: err })
    }
  }
  async token(req, res) {
    return res.status(200).json({ message: 'Token válido' })
  }
}

export default new UsersController()
