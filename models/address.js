const { Model } = require('objection')
const Joi = require('joi')

class Address extends Model {
  static get tableName() {
    return 'addresses'
  }

  static get relationMappings() {
    const User = require('./user')

    return {
      dweller: {
        relation: Model.BelongsToOneRelation, 
        modelClass: User, 
        join: {
          from: 'addresses.user_id', 
          to: 'users.id'
        }
      }
    }
  }
}

const addressSchema = Joi.object({
  address: Joi.string()
    .required(), 

  state: Joi.string()
    .required(), 

  country: Joi.string()
    .required(), 

  zipCode: Joi.string()
    .required(), 

  user_id: Joi.number()
    .integer()
    .required()
})

module.exports.Address = Address
module.exports.addressSchema = addressSchema