const Task = require("../models/Task");

const getAllTask = (req, res) => {
	res.send("Route to get all task");
};

const getSingleTask = (req, res) => {
	res.send("Rpute to get Single task");
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(200).json(task);
	} catch (error) {
		res.status(500).json({
			msg: error,
		});
	}
};

const updateTask = (req, res) => {
	res.send("Route to update created task");
};

const deleteTask = (req, res) => {
	res.send("Route to delete task");
};

module.exports = {
	getAllTask,
	getSingleTask,
	createTask,
	updateTask,
	deleteTask,
};
