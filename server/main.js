import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 5050
const uri = process.env.CONNECTION

app.use(cors())
app.use(express.json())
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
