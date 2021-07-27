import { Router } from 'express'
const routes = Router()

// Controllers
import UsersController from './controllers/UsersController'

routes.get('/', (req, res) => {
  res.send('Bem-vindo')
})

// Users
routes.post('/user/add', UsersController.add)
routes.get('/user/getall', UsersController.get)

export default routes
