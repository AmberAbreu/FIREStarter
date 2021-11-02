const db = require("./db");

const Expenses = require("./models/Expenses");
const Categories = require("./models/Categories");
const User = require("./models/User");

//associations could go here!
Expenses.belongsTo(Categories);
Categories.hasMany(Expenses);

module.exports = {
  db,
  models: {
    Expenses,
    Categories,
    User,
  },
};
