const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config()
const userRoutes = require('./routes/user')

const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use('/api', userRoutes)


const callback = () => {
  console.log(`servidor arrancado en el puerto ${PORT}`);
};

//routes
app.get('/',(req,res)=>{
res.send('bienvenido a tu servidor')
})
//mongo db conection
mongoose.connect(process.env.MONGO_DB_URI).then(()=>{console.log('estas conectado a la bbdd atlas');}).catch((error)=>{console.error(error)})


app.listen(PORT, callback);
