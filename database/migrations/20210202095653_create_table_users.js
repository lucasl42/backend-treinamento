
exports.up = (knex) => {
  return knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary()
      table.string('firstName')
      table.string('lastName')
      table.string('email').unique().notNullable()
      table.string('password')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
};
