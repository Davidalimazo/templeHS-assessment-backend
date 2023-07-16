import {Request, Response} from "express"
import appointmentService from "./appointment.service";


class DoctorController{
   async createAppointment(req:Request, res:Response){
        try {
            const data = await appointmentService.createAppointment(req.body);
            return res.status(200).json(data)
        } catch (error) {
            console.log(error)
            //@ts-ignore
            return res.status(400).json({error:error.message})
        }
    }

    async checkCheck(req:Request, res:Response){
        console.log(req.body);
        const data = await appointmentService.healthCheck();
        return res.status(200).json(data)
    }
}
export default new DoctorController()