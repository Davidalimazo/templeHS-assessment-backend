import db from "../../db/db";

class DoctorDAO{
   async getAllDoctors(){
     const data = await db("doctors").select("*").returning("*");

        return data;
    }
    
   async findOne(id:number){
    const record = await db("doctors").where("id", id).first().returning("*");
        return record;
    }


   async bookedAppointment(id:number, slotIndex:number){
    const record = await this.findOne(id);

    if(record){
      //@ts-ignore
        //@ts-ignore
        record.availableSlots.map((slots, idx) => {
            if (idx === slotIndex) {
              slots.isBooked = true;
            }
          });


          //@ts-ignore
          const data = await db("doctors").update("availableSlots", JSON.stringify(record.availableSlots))
          .where("id", id).returning("*");
     
             return data;
    }



    }
    
}

export default new DoctorDAO()