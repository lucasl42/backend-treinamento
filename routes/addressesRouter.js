var express = require('express');
var router = express.Router();

const addressController = require('../controllers/addressController')

router
  .get('/address', addressController.index)
  .get('/address/:id', addressController.getAddressById)
  .post('/address', addressController.create)
  .put('/address/:id', addressController.update)
  .delete('/address/:id', addressController.delete)


module.exports = router;