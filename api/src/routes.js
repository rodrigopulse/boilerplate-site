import { Router } from 'express'
import Auth from './auth'

const routes = Router()

// Controllers
import UsersController from './controllers/UsersController'
import HeroController from './controllers/HeroController'

routes.get('/', (req, res) => {
  res.send('Bem-vindo')
})

// Users
routes.post('/user/add', Auth.authToken, UsersController.add)
routes.get('/user/getall', Auth.authToken, UsersController.get)
routes.post('/user/token', Auth.authToken, UsersController.token)
routes.post('/user/login', UsersController.login)

// Pages
routes.post('/hero/add', Auth.authToken, HeroController.add)
routes.get('/hero/get', HeroController.get)

export default routes
