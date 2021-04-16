const express = require('express')
const projectRouter = require('./project/router')
const resourceRouter = require('./project/router')

const server = express()

server.use(express.json())
server.use('/api/project', projectRouter)
server.use('/api/resource', resourceRouter)

server.use('*', (req, res) => {
  res.send('Hey Grader!')
})

server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server
