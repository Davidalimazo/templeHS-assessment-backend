import doctorsDao from "./doctors.dao";

class DoctorService{
   async getAllDoctors(){
      let data = await doctorsDao.getAllDoctors();
      return data;
    }
   async findOne(id:number){
      let data = await doctorsDao.findOne(id);
      return data;
    }

   async bookedAppointment(appointmentIndex:number, slotIndex:number){
      let data = await doctorsDao.bookedAppointment(appointmentIndex, slotIndex);
      return data;
    }
    async healthCheck(){
        return "Doctors API is healthy"
    }
}

export default new DoctorService();