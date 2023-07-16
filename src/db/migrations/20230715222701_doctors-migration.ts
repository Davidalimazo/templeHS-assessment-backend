

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//@ts-ignore
exports.up = function (knex) {
    //@ts-ignore
  return knex.schema.hasTable("doctors").then(function (exists) {
    if (!exists) {
        //@ts-ignore
      return knex.schema.createTable("doctors", function (table) {
        table.increments("id").primary();
        table.string("bio").notNull();
        table.string("name").notNull();
        table.string("title").notNull();
        table.json("availableSlots").notNull();
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
  return knex.schema.dropTableIfExists("doctors");
};
