const express = require('express');
const usermodel = require('../models/user');
const router = express.Router();


//GET
router.get('/user', async (req, res, next) => {

  try {
      const results = await usermodel.find();
      console.log(results);
      return res.status(200).json(results);
  } catch (error) {
      return next(error);
  }
});


//POST
router.post('/user', async (req, res, next) => {

console.log("Este es el body", req.body)

try {
  const {
      email,
      password,
      description,
  } = req.body;

  const newUser = new usermodel({
      email,
      password,
      description,
  });
  const userCreated = await newUser.save();
  console.log("usuario añadido");
  return res.status(201).json(userCreated);
} catch (error) {
  return next(error);
}
})

//DELETE


module.exports = router;