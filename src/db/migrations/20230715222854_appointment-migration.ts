

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//@ts-ignore
exports.up = function (knex) {
    //@ts-ignore
  return knex.schema.hasTable("appointments").then(function (exists) {
    if (!exists) {
        //@ts-ignore
      return knex.schema.createTable("appointments", (table) => {
        table.increments("id").primary();
        table.string("date").notNull();
        table.string("duration").notNull();
        table.string("reminder_email").notNull();
        table.string("payment_details").notNull();
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//@ts-ignore
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("appointments");
};
