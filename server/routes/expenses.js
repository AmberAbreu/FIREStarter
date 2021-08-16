const express = require("express")
const router = express.Router()
const mongojs = require('mongojs')

const db = mongojs("mongodb+srv://amber:amber123@cluster0.40awr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", ["expenses"])

router.get("/expenses", (req, res, next) => {
  db.expenses.find(function(err, expenses){
		if(err){
			res.send(err);
		}
		res.json(expenses);
	})
})

module.exports = router