// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'twitter',
      user:     'postgres',
      password: 'password'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
