import usersController from './controllers/usersController.js'

// Importando o packages
import express from 'express'
import cors from 'cors'

// instanciando o servidor
const app = express()

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(express.json())

// configurando o servidor para receber requisições qualquer origem
app.use(cors())

usersController.rotas(app)

export default app
