var express = require('express');
var router = express.Router();

const addressController = require('../controllers/addressController')

router
  .get('/addresses', addressController.index)
  .post('/addresses', addressController.create)
  .put('/addresses/:id', addressController.update)
  .delete('/addresses/:id', addressController.delete)


module.exports = router;