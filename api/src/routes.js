import { Router } from 'express'
import Auth from './auth'
import multer from 'multer'

const routes = Router()

// Controllers
import UsersController from './controllers/UsersController'
import HeroController from './controllers/HeroController'

const storage = multer.diskStorage({
  destination: './images',
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg')
  }
})

const upload = multer({ storage: storage })

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
routes.put(
  '/hero/update',
  Auth.authToken,
  upload.single('imageDesktop'),
  HeroController.update
)

export default routes
