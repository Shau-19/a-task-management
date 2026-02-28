const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const schema = require('./routes/api')
const app = express()

async function startServer() {
    const server = new ApolloServer({ schema })
    await server.start()
    server.applyMiddleware({ app })
}

startServer()
app.listen(3000)
module.exports = app
