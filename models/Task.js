const { Schema, model } = require("mongoose");

// create the schema
const TaskSchema = new Schema({
	name: String,
	completed: Boolean,
});

// create the model

const TaskModel = model("Task", TaskSchema);

// export the model so it can be used by the controllers
module.exports = TaskModel;
