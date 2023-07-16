import {Request, Response} from "express"
import doctorService from "./doctor.service";

class DoctorController{
   async getAllDoctors(req:Request, res:Response){
        try {
            const data = await doctorService.getAllDoctors();
            return res.status(200).json(data)
        } catch (error) {
            console.log(error)
            //@ts-ignore
            return res.status(400).json({error:error.message})
        }
    }
   async bookedAppointment(req:Request, res:Response){
        const {id, slotIndex} = req.body;
        try {
            const data = await doctorService.bookedAppointment(id, slotIndex);
            return res.status(200).json(data)
        } catch (error) {
            console.log(error)
            //@ts-ignore
            return res.status(400).json({error:error.message})
        }
    }
   async findOne(req:Request, res:Response){
        const {id} = req.params;
        if(!id) return res.status(400).json("No valid Id passed")
        const num = Number.parseInt(id)
        try {
            const data = await doctorService.findOne(num);
            return res.status(200).json(data)
        } catch (error) {
            console.log(error)
            //@ts-ignore
            return res.status(400).json({error:error.message})
        }
    }

    async checkCheck(req:Request, res:Response){
        console.log(req.body);
        const data = await doctorService.healthCheck()
        return res.status(200).json(data)
    }
}
export default new DoctorController()