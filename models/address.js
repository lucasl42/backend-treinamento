const { Model } = require('objection')

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

module.exports = Address