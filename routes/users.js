var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')

router
  .get('/user', userController.index)
  .get('/user/:id', userController.getUserById)
  .post('/user', userController.create)
  .put('/user/:id', userController.update)
  .delete('/user/:id', userController.delete)


module.exports = router;
