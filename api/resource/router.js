const express = require('express')
const Resources = require('./model')

const router = express.Router()

const checkResource = (req, res, next) => {
  const { resource_name } = req.body

  if (!resource_name) {
    res.status(400).json({ message: `Resource name is Required` })
  } else {
    next()
  }
}

router.get('/', (req, res, next) => {
  Resources.getAll()
    .then((resource) => {
      res.json(resource)
    })
    .catch((err) => {
      next(err)
    })
})

router.post('/', checkResource, (req, res, next) => {
  const newResource = req.body

  Resources.create(newResource)
    .then((resource) => {
      res.json(resource)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
