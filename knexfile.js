// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: "localhost", 
      user: "root", 
      password: "password", 
      database: "db-backend"
    }, 
    migrations: {
      tableName: 'knex_migrations', 
      directory: `${__dirname}/database/migrations`
    }, 
    seeds: {
      directory: `${__dirname}/database/seeds`
    }
  }

};
