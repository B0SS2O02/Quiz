const express = require('express')
const app = express()
const config = require('../config/config.json')
const db = require('../models')
const router = require('../routers');





app.use('/public', express.static('public'))
app.use('/', express.static('public/client'))

app.use('/', router)


const PORT = 8080

// db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`)
    })
// }).catch((err) => {
//     console.log(err)
// })

