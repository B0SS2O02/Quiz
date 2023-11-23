const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/test', async (req, res) => {
    let data = await db.Tests.findAll({
        attributes: ['Id', 'Name']
    })
    data = JSON.parse(JSON.stringify(data))
    res.render('test', { list: data })
})

router.get('/test/:id', async (req, res) => {
    let data = await db.Tests.findOne({
        attributes: ['Id', 'Name'],
        include: {
            model:db.Questions,
            attributes:['']
        },
        where: {
            Id: req.params.id
        }
    })
    data = JSON.parse(JSON.stringify(data))
    res.send(data)
    // res.render('test', { list: data })
})

module.exports = router
