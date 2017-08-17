import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import schema from './graphql'
import controllers from './controllers'
import config from 'config'

const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// parse json
app.use((req, res, next) => {
  var auth = req.headers.authorization;
  if (!auth)
    // return res.sendStatus(401, 'missing authorization header')
  // verify a token symmetric
  jwt.verify(auth, config.ACCESS_TOKEN_SECRET, function(err, decoded) {
    if (err)
      // return res.sendStatus(401, 'Invalid token')
    next()
  });
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
mongoose.connect(config.DBHost);
app.use(controllers)
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(3000)
console.log('Listening on port 3000')
// for testing purposes
export default app
