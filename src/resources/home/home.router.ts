import express, {Request, Response} from "express"

const test = async(req:Request, res:Response)=>{
  return res.status(200).json("Hello")
}

const router = express.Router();

router.get("/", test)


export default router;