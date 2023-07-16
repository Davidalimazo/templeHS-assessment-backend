/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//@ts-ignore
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("appointments").del();
    await knex("appointments").insert([
      {
        id: 1,
        date: "Friday July 14, 9:30AM",
        duration: "30 Minutes",
        reminder_email: "pelumi.al@gmail.com",
        payment_details: "Mastercard ****6427 - Exp 02/25",
      },
    ]);
  };
  