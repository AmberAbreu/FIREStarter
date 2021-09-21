const express = require("express")
const router = express.Router()
const mongojs = require('mongojs')



router.get("/expenses", (req, res, next) => {
  db.expenses.find(function(err, expenses){
		if(err){
			res.send(err);
		}
		res.json(expenses);
	})
})


router.post("/expenses", (req, res, next) => {
	const expenses = req.body.data;
  if (!expenses.userName){
		res.status(400)
		res.json({
			error: "Bad data"
		});
	}else{
			db.expenses.save(expenses, function(err, savedExpenses){
				if(err){
					res.send(err);
				}
				res.json(savedExpenses)
			});
		}
})

module.exports = router