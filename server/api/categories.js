   
const router = require('express').Router()
const { models: { Expenses, Categories }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const categories = await Categories.findAll({
      include: Expenses
    })
    res.json(categories)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const category = await Categories.findByPk(req.params.id, {include: Expenses})
    console.log(req.params.id)
    if(category){
    res.json(category)
    }else{
      next({ message: "some problem occured", status: 404})
    }
  } catch (err) {
    next(err)
  }
})

router.post('/:id', async (req, res, next) => {
  try {
    const category = await Categories.findByPk(req.params.id)
    const createdExpense = await Expenses.create(req.body)
    category.addExpenses(createdExpense)
    res.send(createdExpense)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const expense = await Expenses.findByPk(req.params.id)
    const updatedExpense = await expense.update(req.body)
    res.json(updatedExpense)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const expense = await Expenses.findByPk(req.params.id)
    await expense.destroy()
    res.json(expense)
  } catch (err) {
    next(err)
  }
})