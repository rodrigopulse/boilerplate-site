import jwt from 'jwt-simple'

class Auth {
  async authToken(req, res, next) {
    try {
      let token = req.headers.authorization
      token = token.split(' ')
      token = token[1]
      if (token === undefined) {
        return res.status(401).json({ message: 'Não existe token no header' })
      } else {
        const decoded = await jwt.decode(
          token.toString(),
          process.env.SECRET_JWT || ''
        )
        if (decoded) {
          return next()
        } else {
          return res.status(401).json({ message: 'Token invalido' })
        }
      }
    } catch (err) {
      return res.status(401).json({ message: 'Token invalido', error: err })
    }
  }
}
export default new Auth()
