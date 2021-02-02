
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstName: 'lucas',
          lastName: 'loureiro',
          email: 'email@email.com', 
          password: 'senha', 
          age: 27
        },
        {
          firstName: 'joao',
          lastName: 'carlos',
          email: 'email1@email.com', 
          password: 'senha1', 
          age: 18
        }
      ]);
    });
};
