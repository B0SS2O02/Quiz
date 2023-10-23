const express = require('express')
const app = express()
const config = require('../config/config.json')
const db = require('../models')


const PORT = 8080
app.use(async (req, res) => {
    const data = await db.Tests.findAll({
        include: {
            model: db.Questions,
            include: {
                model: db.Options
            }
        }
    })
    res.json(data)
})
const start = async () => {
    try {
        await db.sequelize.authenticate()
        console.log('The connection to the database was successfully established')
        app.listen(PORT, () => {
            console.log(`Server started on http://localhost:${PORT}`)
        })
    } catch (e) {
        if (e.parent.sqlMessage == `Unknown database '${config.database}'`) {

            db.sequelize.createDatabase('my_database');
             db.sequelize.sync({ force: true })
            start()
        } else {
            console.log("Unable to connect to the database:", e)
        }
    }
}



start()
