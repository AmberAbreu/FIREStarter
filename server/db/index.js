const db = require('./db')

const Expenses = require('./models/Expenses')
const Categories = require('./models/Categories')

//associations could go here!
Expenses.belongsTo(Categories)
Categories.hasMany(Expenses)

module.exports = {
  db,
  models: {
    Expenses,
    Categories
  },
}