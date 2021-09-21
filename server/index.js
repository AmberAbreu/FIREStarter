const express = require("express")
const mongoose = require('mongoose')

const {MongoClient} = require('mongodb');

const mongoUri = "mongodb+srv://amber:amber123@cluster0.40awr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const client = new MongoClient(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("successfully connected")
  client.close();
});

const path = require("path")
const bodyParser = require("body-parser")

const expenses = require("./routes/expenses")

const app = express();

app.get('/', (req, res) => {
  res.send('Hi there!')
});

const port = 3000


app.listen(port, function(){
  console.log("Server running on port", port)
})

