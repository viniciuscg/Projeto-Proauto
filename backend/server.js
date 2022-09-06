import express from 'express'
import cors from 'cors'
import { associateRoutes } from './app/routes/associate.routes.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(associateRoutes)

app.listen(3333, () => {
    console.log("Server running at 3333")
})