
require("dotenv").config({ path: "../../.env" })

// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: process.env.PGHOST,
      port:  Number(process.env.PGPORT),
      database:  process.env.PGDATABASE,
      user:  process.env.PGUSER,
      password:  process.env.PGPASSWORD,
    },
  },

  production: {
    client: "postgresql",
    connection: {
      host: process.env.PGHOST,
      port:  Number(process.env.PGPORT),
      database:  process.env.PGDATABASE,
      user:  process.env.PGUSER,
      password:  process.env.PGPASSWORD,
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

