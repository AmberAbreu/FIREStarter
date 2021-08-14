const food = require('./assets/icons/food_icon.png')
const selfcare = require('./assets/icons/selfcare.png')
const utilities = require('./assets/icons/utilities.png')
const savings = require('./assets/icons/savings.png')



const confirmStatus = "C"
const pendingStatus = "P"

let categoriesData = [
  {
  id: 1,
  name: "Nutrition",
  icon: food,
  color: "blue",
  expenses: [
      {
          id: 1,
          title: "Grocery",
          description: "Vitamin",
          total: 25.00,

      },
      {
        id: 2,
        title: "Restaurant",
        description: "Pasta",
        total: 40.00,

    }

  ],
},
{
  id: 2,
  name: "Self Care",
  icon: selfcare,
  color: "pink",
  expenses: [
      {
          id: 2,
          title: "Skin Care product",
          description: "skin care",
          total: 10.00,

      },
  ],
},
{
  id: 3,
  name: "Utilities",
  icon: utilities,
  color: "gray",
  expenses: [
      {
          id: 3,
          title: "Light bill",
          description: "housing expenses",
          total: 60.00,

      },
  ],
},
{
  id: 4,
  name: "Savings",
  icon: savings,
  color: "green",
  expenses: [
      {
          id: 4,
          title: "Savings",
          description: "rainy day fund",
          total: 100.00,

      },
  ],
}
]

export default categoriesData