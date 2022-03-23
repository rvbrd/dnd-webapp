import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import spellRoutes from './routes/spell.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5050
const uri = process.env.CONNECTION

app.use(cors())
app.use(express.json())
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

app.use('/spells', spellRoutes)

mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => {
        console.log(`server is connected to mongodb`)
    })
    .catch((err) => {
        console.log(err.message)
    })
