import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import controllers from './controllers'
import config from 'config'

const app = express()
// parse json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
console.log(config)
mongoose.connect(config.DBHost);
app.use(controllers)

app.listen(3000)
console.log('Listening on port 3000')
// for testing purposes
export default app
