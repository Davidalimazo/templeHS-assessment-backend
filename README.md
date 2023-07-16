
# TempleHS - Backend

This repo contains the server logic for TempleHS.


clone the repo: git clone [url]
install the dependencies: npm install
create a .env file and fill in the details below:

API_PORT =

HOST=

PORT=

DATABASE=

USER=

PASSWORD=

create a postgres database then fill the .env with your database credentials.

cd into the db folder then run [npm run db] to import the db migrations and to populate your db with the test data.


# Starting The server

#### npm start

# Routes

#### Health Check - POST - /api/appointment/health - Body:any JSON
#### Health Check - POST - /api/doctor/health -  Body: any JSON
#### Get All Doctors - GET - /api/doctor/all
#### Get Doctor by ID - GET - /api/doctor/:id - id:number
#### Book Appointment - PATCH - /api/doctor/:id - {
    id:number, slotIndex:number
    }
#### where id is doctor id column and slotIndex is the index of available slots
#### Create Appointment - POST - /api/appointment/create - Body: {
    "date": string,
    "duration": string,
    "reminder_email": string,
    "payment_details": string
}

# Sample Doctor data

     {
        id: 1,
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

# Sample Appointment data

   {
        id: 1,
        date: "Friday July 14, 9:30AM",
        duration: "30 Minutes",
        reminder_email: "pelumi.al@gmail.com",
        payment_details: "Mastercard ****6427 - Exp 02/25",
      },
