//Model Name should be start with upper case letter

const Sequelize = require('sequelize')
const db = require('./database')

const linkModel = db.define('links', {
    mainLink: {
        type: Sequelize.STRING
    },
    shortLink: {
        type: Sequelize.STRING
    }
}
)

module.exports = linkModel
