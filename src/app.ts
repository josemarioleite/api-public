import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import router from './routes'

import swaggerUI from 'swagger-ui-express'
import * as swaggerDocument from '../swagger.json'

const app = express()
const PORT = process.env.API_PORT || 3000

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use('/api/v1', router)
app.use('', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`)
})

export default app