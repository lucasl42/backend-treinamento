
exports.up = function(knex) {
  return knex.schema
    .createTable('addresses', (table) => {
      table.increments('id').primary()
      table.string('address')
      table.string('state')
      table.string('country')
      table.string('zipCode')
      table.integer('user_id')
        .unsigned()
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('addresses')
};
