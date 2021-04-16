const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Project here')
})

module.exports = router
