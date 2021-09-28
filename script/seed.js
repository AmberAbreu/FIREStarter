'use strict'

const {db, models: {Expenses, Categories} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Expenses
  const categories = await Promise.all([
    Categories.create({ name: 'Nutrition', color: 'blue'}),
    Categories.create({ name: 'Self Care', color: 'pink'}),
    Categories.create({ name: 'Utilities', color: 'gray'}),
    Categories.create({ name: 'Savings', color: 'green'}),
  ])
  const [Nutrition, SelfCare, Utilities, Savings] = categories


  // Creating Expenses
  const expenses = await Promise.all([
    Expenses.create({ title: 'Grocery', description: 'Vitamin', total: 25 }),
    Expenses.create({ title: 'Restaurant', description: 'Pasta', total: 40 }),
    Expenses.create({ title: 'Skin Care Product', description: 'skin care', total: 10 }),
    Expenses.create({ title: 'Light Bill', description: 'housing expense', total: 60 }),
    Expenses.create({ title: 'Save', description: 'rainy day fund', total: 100 })
  ])
  const [Grocery, Restaurant, SkinCareProduct, LightBill, Save] = expenses

await Nutrition.addExpenses(Grocery)
await Nutrition.addExpenses(Restaurant)
await SelfCare.addExpenses(SkinCareProduct)
await Utilities.addExpenses(LightBill)
await Savings.addExpenses(Save)

  console.log(`seeded ${expenses.length} users`)
  console.log(`seeded successfully`)
  
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed