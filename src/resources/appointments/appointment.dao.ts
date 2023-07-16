import db from "../../db/db";
import { AppointmentType } from "./appointment.interface";

class AppointmentDAO{
   async createAppointment(appointmentDto:AppointmentType){
   const [id] =  await db("appointments").insert({
        date: appointmentDto.date,
        duration: appointmentDto.duration,
        reminder_email: appointmentDto.reminder_email,
        payment_details: appointmentDto.payment_details
     }).returning("id");
     return id;
    }
    
}

export default new AppointmentDAO()