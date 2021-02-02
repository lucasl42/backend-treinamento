
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('addresses').del()
    .then(function () {
      // Inserts seed entries
      return knex('addresses').insert([
        {
          address: 'Rua Sao Luis, 204',
          state: 'SP',
          country: 'Brasil', 
          zipcode: '13180-005', 
          user_id: 1
        },
        {
          address: 'Avenida Brasil',
          state: 'RJ',
          country: 'Brasil', 
          zipcode: '16504-131', 
          user_id: 2
        },
      ]);
    });
};
