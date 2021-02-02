
exports.seed = (knex) => {
  return knex.schema
    .dropTableIfExists('addresses')
    .dropTableIfExists('users')
};
