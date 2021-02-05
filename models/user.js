const { Model } = require('objection')
const Joi = require('joi')
const passwordComplexity  = require('joi-password-complexity').default

class User extends Model {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const { Address } = require('./address')

    return {
      addresses: {
        relation: Model.HasManyRelation,
        modelClass: Address, 
        join: {
          from: 'users.id', 
          to: 'addresses.user_id'
        }
      }
    }
  }
}

const userSchema = Joi.object({
  firstName: Joi.string()
    .required(), 

  lastName: Joi.string()
    .required(), 

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(), 

  password: passwordComplexity().required(), 

  age: Joi.number()
    .integer()
    .positive()
    .required()
    
})

module.exports.User = User
module.exports.userSchema = userSchema