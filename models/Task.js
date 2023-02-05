const { Schema, model } = require("mongoose");

// create the schema
const TaskSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: [true, "must contain a name"],
		maxLength: [20, "name cannot be more than 20 characters"],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

// create the model

const TaskModel = model("Task", TaskSchema);

// export the model so it can be used by the controllers
module.exports = TaskModel;
