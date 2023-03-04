const express = require("express");
const mongoose = require("mongoose");
const port = 5500;
const router = require("./routes/taskRoute");
const errorHandler = require("./middlewares/errorHandler.js");
const connectDB = require("./db/connect");
require("dotenv").config();

// connect mongoose to the database
mongoose.set("strictQuery", false);

const app = express();

// middleware definitions
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/task", router);
app.use((req, res) => res.status(404).send("Route does not exist"));
app.use(errorHandler);

// connect to the data base
const start = async () => {
	try {
		await connectDB(process.env.CONNECTION_STRING);
		app.listen(port, console.log(`Server is running on port: ${port}`));
	} catch (error) {
		console.log(error);
	}
};

// start the process
start();
