const Sequelize = require("sequelize");
const db = require("../db");

const Budget = db.define("budget", {
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Budget;
