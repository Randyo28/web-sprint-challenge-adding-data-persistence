const express = require('express')
const Resources = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
  Resources.getAll()
    .then((resource) => {
      res.json(resource)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
