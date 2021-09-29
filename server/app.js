const express = require('express')
const categories = require('./api/categories')

require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json())

app.use('/categories', categories)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))