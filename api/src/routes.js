import { Router } from 'express'
import Auth from './auth'

const routes = Router()

// Controllers
import UsersController from './controllers/UsersController'

routes.get('/', (req, res) => {
  res.send('Bem-vindo')
})

// Users
routes.post('/user/add', Auth.authToken, UsersController.add)
routes.get('/user/getall', Auth.authToken, UsersController.get)
routes.post('/user/token', Auth.authToken, UsersController.token)
routes.post('/user/login', UsersController.login)

export default routes
