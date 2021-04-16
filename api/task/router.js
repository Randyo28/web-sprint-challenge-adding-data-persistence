const express = require('express')
const Task = require('./model')

const router = express.Router()

const checkPost = (req, res, next) => {
  const { task_description, project_id } = req.body

  if (!task_description) {
    res.json({ message: `Task description is required` })
  } else if (!project_id) {
    res.json({ message: `project_id is required` })
  } else {
    next()
  }
}

router.get('/', (req, res, next) => {
  Task.getTasks()
    .then((task) => {
      res.json(task)
    })
    .catch((err) => {
      next(err)
    })
})

router.post('/', checkPost, (req, res, next) => {
  const newTask = req.body

  Task.create(newTask)
    .then((task) => {
      res.json(task)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
