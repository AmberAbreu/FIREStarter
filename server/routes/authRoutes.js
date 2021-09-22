const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
//we accesss the user model this way.
const User = mongoose.model('User')



router.post('/signup', async (req, res) => {
	const { email, password } = req.body;
	const user = new User({ email, password })
  try {
    await user.save();
  } catch (error) {
    console.log(error)
  }
	
	res.send('You made a post request')
})




module.exports = router