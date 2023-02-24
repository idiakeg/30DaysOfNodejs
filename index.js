const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./db/connect");
const router = require("./routes/user");
require("dotenv").config();
const port = process.env.PORT_NUMBER;
const uri = process.env.CONNECTION_STRING;

mongoose.set("strictQuery", false);

const app = express();

// middleware definitions
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/signup", router);

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
