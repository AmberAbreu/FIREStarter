const Sequelize = require('sequelize')
const db = require('../db')

const Expenses = db.define('expense', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  total: Sequelize.INTEGER
})

module.exports = Expenses