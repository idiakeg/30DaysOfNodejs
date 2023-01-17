const express = require("express");
const port = 5500;
const router = require("./routes/taskRoute");
const { connectToDb, getDb } = require("./db/connect");
const mongoose = require("mongoose");
const connectionString = require("./db/connect");

// connect mongoose to the database
mongoose.set("strictQuery", false);
mongoose
	.connect(connectionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Database connected!"))
	.catch((err) => console.log("this is the error msg:", err));

// create a schema
const NewSchema = new mongoose.Schema({
	name: String,
	age: Number,
});

const app = express();

// // model the created schema
const newModel = new mongoose.model("User", NewSchema);

const data = async () => {
	const result = await newModel.create([
		{ name: "Joshua", age: 34 },
		{ name: "Elanga", age: 24 },
		{ name: "Rashford", age: 15 },
	]);
};

// call the function to insert anthony's data
data();

// middleware definitions
app.use("/api/v1/task", router);

app.listen(port, console.log(`Server is running on port: ${port}`));
