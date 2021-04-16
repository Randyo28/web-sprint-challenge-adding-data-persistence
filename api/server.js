const express = require('express')
const projectRouter = require('./project/router')

const server = express()

server.use(express.json())
server.use('/api/project', projectRouter)

server.use('*', (req, res) => {
  res.send('Hey Grader!')
})

module.exports = server
