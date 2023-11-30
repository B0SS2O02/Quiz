const router = require('express').Router()
const client = require('./client')
const admin = require('./admin')

router.use('/api', client)

router.use('/admin', admin)

module.exports = router