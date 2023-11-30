const express = require('express')
const router = express.Router()
const db = require('../models')
const view = require('../views/components')


view.parse('dsfsdfsd {{ dfg dsfgdfg}} fd sdfsd {{> dfsgd}}')

router.get('/', (req, res) => {
    res.send(view.get(
        'up',
        'navbar',
        '<div class="container">',
        '{{12}}',
        'header',
        '<div>',
        'down'
    ))
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
            model: db.Questions,
            attributes: ['']
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
