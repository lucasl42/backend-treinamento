const knexfile = require('../knexfile')
const knex = require('knex')(knexfile['development'])
const { Model } = require('objection')

Model.knex(knex)
module.exports = knex