const express = require("express");
const categories = require("./api/categories");
const users = require("./api/users");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/categories", categories);
app.use("/users", users);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
