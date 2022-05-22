import App from "./src/App";
import { config } from "dotenv";
config();
const PORT = parseInt(process.env.SERVER_PORT!) || 3000;
const app = new App(PORT);
app.run();
