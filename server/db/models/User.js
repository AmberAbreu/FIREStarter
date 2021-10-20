const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  income: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  savings: Sequelize.INTEGER
})

module.exports = User