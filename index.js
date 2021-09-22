import express from "express";
import cors from "cors";
import eventRoutes from "./event-routes.js";

const port = 4000;
const hostname = "localhost";

const app = express();

//Middlewares
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/events", eventRoutes);

app.listen(port, hostname, () => {
	console.log(`Events server is listening on ${hostname}:${port}`);
});
