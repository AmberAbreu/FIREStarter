const db = require('./db')

const Expenses = require('./models/Expenses')

//associations could go here!

module.exports = {
  db,
  models: {
    Expenses,
  },
}