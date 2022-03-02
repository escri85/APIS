const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/user.routes");

const server = express();

const PORT = process.env.PORT || 5000;

const {connectToDb} = require('./config/db')
connectToDb()

//middleware
server.use(express.json());
server.use("/", userRoutes);

const callback = () => {
  console.log(`servidor arrancado en el puerto ${PORT}`);
};

//routes
server.get("/", (req, res) => {
  res.send("bienvenido a tu servidor");
});



server.listen(PORT, callback);
