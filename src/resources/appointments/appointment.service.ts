import appointmentDao from "./appointment.dao";
import { AppointmentType } from "./appointment.interface";

appointmentDao

class AppointmentService{
   async createAppointment(dto:AppointmentType){
    const data = await appointmentDao.createAppointment(dto);
      return data;
    }
    async healthCheck(){
        return "Appointment API is healthy"
    }
}

export default new AppointmentService();