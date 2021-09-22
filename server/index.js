//only require it once here so we don't have to always repeat this
require('./models/User')
const express = require("express")
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const authRoutes = require("./routes/authRoutes")

const app = express();

app.use(bodyParser.json())
app.use(authRoutes)


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





app.get('/', (req, res) => {
  res.send('Hi there!')
});

const port = 3000


app.listen(port, function(){
  console.log("Server running on port", port)
})

