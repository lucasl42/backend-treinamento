var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')
const addressController = require('../controllers/addressController')

router
  .get('/user', userController.index)
  .get('/user/address', addressController.index)
  .get('/user/address/:id', addressController.getAddressById)
  .get('/user/:id', userController.getUserById)
  .post('/user', userController.create)
  .post('/user/address', addressController.create)
  .put('/user/address/:id', addressController.update)
  .put('/user/:id', userController.update)
  .delete('/user/address/:id', addressController.delete)
  .delete('/user/:id', userController.delete)

module.exports = router;
