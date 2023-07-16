
require('dotenv').config({ path: "../../.env" })

// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: process.env.HOST,
      port:  Number(process.env.PORT),
      database:  process.env.DATABASE,
      user:  process.env.USER,
      password:  process.env.PASSWORD,
    },
  },

  production: {
    client: "postgresql",
    connection: {
      host: process.env.HOST,
      port:  Number(process.env.PORT),
      database:  process.env.DATABASE,
      user:  process.env.USER,
      password:  process.env.PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

