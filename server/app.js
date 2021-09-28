const express = require('express')
const expenses = require('./api/expenses')

require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json())

app.use('/expenses', expenses)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))