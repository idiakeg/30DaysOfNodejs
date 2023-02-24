const { Schema, model } = require("mongoose");

// create the schema
const userSchema = new Schema({
	name: String,
	email: String,
	Password: String,
	phone: String,
});

// create the model
const userModel = model("user", userSchema);

module.exports = userModel;
