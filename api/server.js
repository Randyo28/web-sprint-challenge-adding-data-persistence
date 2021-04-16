const express = require('express')

const server = express()

server.use(express.json())

server.use('*', (req, res) => {
  res.send('Hey Grader!')
})

module.exports = server
