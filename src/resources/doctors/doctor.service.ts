import doctorsDao from "./doctors.dao";

class DoctorService{
   async getAllDoctors(){
      const data = await doctorsDao.getAllDoctors();
      return data;
    }
   async findOne(id:number){
      const data = await doctorsDao.findOne(id);
      return data;
    }

   async bookedAppointment(appointmentIndex:number, slotIndex:number){
    const data = await doctorsDao.bookedAppointment(appointmentIndex, slotIndex);
      return data;
    }
    async healthCheck(){
        return "Doctors API is healthy"
    }
}

export default new DoctorService();