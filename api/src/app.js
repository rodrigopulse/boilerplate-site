import express from 'express'
import routes from './routes'

const app = express()
const port = 5400

app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
