/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//@ts-ignore
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("doctors").del();
    await knex("doctors").insert([
      {
        id: 0,
        bio: "Dr. Leo is a board certified intermist with a broad experience treating both complex and simple medical conditions, She has been practicing for more than 10 years. She graduated from Turfs University",
        name: "Leo Stanton, MD",
        title: "Care Team Clinician Supervisor",
        availableSlots: JSON.stringify([
          { date: "2023/07/14", time: "09:30", isBooked: false },
          { date: "2023/07/18", time: "12:30", isBooked: true },
          { date: "2023/07/22", time: "10:40", isBooked: false },
          { date: "2023/07/24", time: "15:30", isBooked: false },
          { date: "2023/07/28", time: "19:00", isBooked: false },
          { date: "2023/07/30", time: "17:30", isBooked: false },
        ]),
      },
      {
        id: 1,
        bio: "Dr. Marcelino Kindred is a board certified medical physician based in San Diego, CA, He received his Doctor of Osteopathic Medicine degree from Western University/COMP in Pomona, CA and completed...",
        title: "Medical Doctor",
        name: "Marcelino Kindred, MD",
        availableSlots: JSON.stringify([
          { date: "2023/07/15", time: "11:30", isBooked: false },
          { date: "2023/07/19", time: "13:30", isBooked: false },
          { date: "2023/07/23", time: "14:40", isBooked: true },
          { date: "2023/07/21", time: "15:30", isBooked: true },
          { date: "2023/07/25", time: "09:00", isBooked: false },
          { date: "2023/07/31", time: "16:30", isBooked: false },
        ]),
      },
      {
        id: 2,
        bio: "Dr. Pat Alexander is a family practice physician with Doctor on demand Dr. Pat received her undergraduate degree from Smith College in 2004, and her medical degree from Columbia University in 2008",
        title: "Medical Doctor",
        name: "Pat Alexander, DO",
        availableSlots: JSON.stringify([
          { date: "2023/07/14", time: "13:30", isBooked: true },
          { date: "2023/07/17", time: "12:30", isBooked: false },
          { date: "2023/07/26", time: "10:40", isBooked: false },
          { date: "2023/08/12", time: "15:30", isBooked: false },
          { date: "2023/08/11", time: "09:00", isBooked: false },
          { date: "2023/08/16", time: "10:30", isBooked: true },
        ]),
      },
      {
        id: 3,
        bio: "Dr. Pat Alexander is a family practice physician with Doctor on demand Dr. Pat received her undergraduate degree from Smith College in 2004, and her medical degree from Columbia University in 2008",
        title: "Medical Doctor",
        name: "Pat Alexander, MD",
        availableSlots: JSON.stringify([
          { date: "2023/07/18", time: "11:30", isBooked: false },
          { date: "2023/07/22", time: "12:30", isBooked: false },
          { date: "2023/07/26", time: "10:40", isBooked: true },
          { date: "2023/07/29", time: "15:30", isBooked: true },
          { date: "2023/08/05", time: "09:00", isBooked: false },
          { date: "2023/08/09", time: "10:30", isBooked: false },
        ]),
      },
      {
        id: 4,
        bio: "Dr. Audrey Simmons is a board certified internist with a broad experience treating both complex and simple medical conditions. He has been practicing for more than 10 years. He graduated from Tufts University",
        title: "Medical Doctor",
        name: "Audrey Simmons, MD",
        availableSlots: JSON.stringify([
          { date: "2023/07/14", time: "13:30", isBooked: false },
          { date: "2023/07/17", time: "12:30", isBooked: true },
          { date: "2023/07/26", time: "10:40", isBooked: false },
          { date: "2023/07/27", time: "15:30", isBooked: false },
          { date: "2023/07/21", time: "09:00", isBooked: true },
          { date: "2023/07/16", time: "10:30", isBooked: false },
        ]),
      },
    ]);
  };
  