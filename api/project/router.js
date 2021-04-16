const express = require('express')
const Projects = require('./model')

const router = express.Router()

const checkPost = (req, res, next) => {
  const { project_name } = req.body

  if (!project_name) {
    res.status(400).json({ message: `Project name is required` })
  } else {
    next()
  }
}

router.get('/', (req, res, next) => {
  Projects.getProjects()
    .then((project) => {
      res.json(project)
    })
    .catch((err) => {
      next(err)
    })
})

router.post('/', checkPost, (req, res, next) => {
  const newProject = req.body

  Projects.create(newProject)
    .then((project) => {
      res.json(project)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
