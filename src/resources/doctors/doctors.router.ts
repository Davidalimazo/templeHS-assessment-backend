import express from "express";
import doctorsController from "./doctors.controller";
doctorsController


const router = express.Router();

router.get("/doctor/all", doctorsController.getAllDoctors)
router.post("/doctor/health", doctorsController.checkCheck)
router.get("/doctor/:id", doctorsController.findOne)
router.patch("/doctor/book", doctorsController.bookedAppointment);

export default router;