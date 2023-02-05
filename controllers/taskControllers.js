const Task = require("../models/Task");

const getAllTask = async (req, res) => {
	try {
		const task = await Task.find({});
		res.status(200).json({
			task: task,
		});
	} catch (error) {
		res.status(500).json({
			msg: error,
		});
	}
};

const getSingleTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const task = await Task.findOne({ _id: taskId });
		if (!task) {
			return res.status(404).json({
				msg: "No such task exists",
			});
		}
		res.status(200).json(task);
	} catch (error) {
		res.status(500).json({
			msg: error,
		});
	}
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
