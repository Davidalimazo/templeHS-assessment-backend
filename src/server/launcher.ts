import { Application } from "express";
import http, { Server } from "http";

class Launcher {
	private server:Server;
	private port:number;

	constructor(express:Application, _port:number){
		this.server = http.createServer(express);
		this.port = _port;
	}

	public initServer(){
		this.server.listen(this.port, "0.0.0.0", ()=>{
			console.log(`Server is listening on ${this.port}`);
		});
	}
}
export default Launcher;