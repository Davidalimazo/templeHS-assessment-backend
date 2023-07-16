import "dotenv/config";
import App from "./app";
import Launcher from "./server/launcher";
import doctorRouter from "./resources/doctors/doctors.router"
import appointmentRouter from "./resources/appointments/appointment.router"


const app = new App([{path:"/doctor", router:doctorRouter}, {path:"/appointment", router:appointmentRouter}]);
const PORT = Number(process.env.API_PORT) || 3001;
const server = new Launcher(app.express, PORT);
server.initServer();