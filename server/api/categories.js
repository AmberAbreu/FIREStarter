   
const router = require('express').Router()
const { models: { Expenses, Categories }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const categories = await Categories.findAll({
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

// router.post('/', async (req, res, next) => {
//   try {
//     const createdExpense = await Expense.create(req.body)
    
    
//   } catch (err) {
//     next(err)
//   }
// })

// router.put('/', async (req, res, next) => {
//   try {
//     const users = await Expenses.findByPk({
//       // explicitly select only the id and username fields - even though
//       // users' passwords are encrypted, it won't help if we just
//       // send everything to anyone who asks!
      
//     })
//     res.json(users)
//   } catch (err) {
//     next(err)
//   }
// })

// router.delete('/', async (req, res, next) => {
//   try {
//     const users = await Expenses.findByPk({
//       // explicitly select only the id and username fields - even though
//       // users' passwords are encrypted, it won't help if we just
//       // send everything to anyone who asks!
      
//     })
//     res.json(users)
//   } catch (err) {
//     next(err)
//   }
// })