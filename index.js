const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./db/connect");
require("dotenv").config();
const port = process.env.PORT_NUMBER;
const uri = process.env.CONNECTION_STRING;

mongoose.set("strictQuery", false);

const app = express();

// middleware definitions
app.use(express.static(path.join(__dirname, "public")));

const start = async () => {
	try {
		await connectDB(uri);
		app.listen(port, () => console.log(`server is running on port: ${port}`));
		console.log("connected to DB successfully");
	} catch (error) {
		console.log(`Error from mongoDB connection: ${error}`);
	}
};

// start the app
start();
