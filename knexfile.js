// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {  

  development: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'sisir',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory:'./migrations'
    },
    seeds:{
      directory:'./seeds',
    }
  },
};
