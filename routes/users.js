var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')

router
  .get('/users', userController.index)
  .get('/users/:id', userController.getUserById)
  .post('/users', userController.create)
  .put('/users/:id', userController.update)
  .delete('/users/:id', userController.delete)


module.exports = router;
