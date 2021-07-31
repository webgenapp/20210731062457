const express = require('express')
const router = express.Router()

const coffeesRouter = require('./coffees')
router.use('/coffees', coffeesRouter)

const fruitsRouter = require('./fruits')
router.use('/fruits', fruitsRouter)

const usersRouter = require('./users')
router.use('/users', usersRouter)

module.exports = router
