import express from "express";
import appointmentController from "./appointment.controller";


const router = express.Router();

router.post("/appointment/create", appointmentController.createAppointment)
router.post("/appointment/health", appointmentController.checkCheck)

export default router;;