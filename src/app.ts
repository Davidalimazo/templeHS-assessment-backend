import express, {Application} from "express";
import mongoose from "mongoose";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import IController from "./utils/interfaces/controller.interface";
import ErrorMiddleWare from "./middleware/error/error.middleware";

class App {
	public express: Application;

	constructor(controller: IController[]){
		this.express = express();

		//this.initializeDBConnection();
		this.initializeMiddleWare();
		this.initializeControllers(controller);
		this.initializeErrorhandling();
	}
	private initializeMiddleWare(){
		this.express.use(cors());
		this.express.use(helmet());
		this.express.use(morgan("dev"));
		this.express.use(express.json());
		this.express.use(compression());
		this.express.use(express.urlencoded({extended:false}));
	}
	private initializeControllers(controllers:IController[]){
		controllers.forEach(controller=>this.express.use("/api", controller.router));
	}
	private initializeErrorhandling():void{
		this.express.use(ErrorMiddleWare);
	}
	// private initializeDBConnection(){
	// 	const url = process.env.MONGO_URI || "";
	// 	mongoose.connect(url, {retryWrites:true}).then(state=>console.log("connected to db")).catch(error=>
	// 		console.log("error connecting to db", error
	// 		));
	// }
}

export default App;