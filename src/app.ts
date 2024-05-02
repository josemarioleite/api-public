import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import router from './routes'

const app = express()
const PORT = process.env.API_PORT || 3000

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`)
})

export default app