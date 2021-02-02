var express = require('express');
var router = express.Router();

const addressController = require('../controllers/addressController')

router
  .get('/addresses', addressController.index)
  .get('/addresses/:id', addressController.getAddressById)
  .post('/addresses', addressController.create)
  .put('/addresses/:id', addressController.update)
  .delete('/addresses/:id', addressController.delete)


module.exports = router;