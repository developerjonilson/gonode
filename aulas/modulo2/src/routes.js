const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
  // return res.send('Hello World')
  return res.render('auth/signup')
})

module.exports = routes
