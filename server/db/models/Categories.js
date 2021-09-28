const Sequelize = require('sequelize')
const db = require('../db')

const Categories = db.define('categories', {
  name: {
    type: Sequelize.ENUM('Nutrition', 'Self Care', 'Utilities', 'Savings'),
    allowNull: true
  },
  color: {
    type: Sequelize.ENUM('blue', 'pink', 'yellow', 'orange', 'red', 'gray', 'black', 'green'),
    allowNull: true
  }
})

module.exports = Categories