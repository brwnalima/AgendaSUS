import express from "express"
import pacienteRoutes from "./routes/pacientes.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", pacienteRoutes)

app.listen(5000)