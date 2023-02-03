const express = require("express");
const mongoose = require("mongoose");
const port = 5500;
const router = require("./routes/taskRoute");
const connectDB = require("./db/connect");

// connect mongoose to the database
mongoose.set("strictQuery", false);

const app = express();

// middleware definitions
app.use("/api/v1/task", router);

// connect to the data base
const start = async () => {
	try {
		await connectDB();
		app.listen(port, console.log(`Server is running on port: ${port}`));
	} catch (error) {
		console.log(error);
	}
};

// start the process
start();
