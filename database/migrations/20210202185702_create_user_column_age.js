
exports.up = (knex) => {
  return knex.schema.alterTable('users', (table) => {
    table.integer('age')
  })
};

exports.down = (knex) => {
  return knex.schema.alterTable('users', (table) => {
    table.dropColumn('age')
  })
};
