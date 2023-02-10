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

const deleteTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const { acknowledged, deletedCount } = await Task.deleteOne({
			_id: taskId,
		});
		if (deletedCount === 0) {
			return res.status(404).json({
				status: "failed",
				msg: `task with id: ${taskId} doesnot exist`,
			});
		}
		res.status(200).json({
			status: "success",
			msg: `task with id: ${taskId} was deleted`,
		});
	} catch (error) {
		res.status(500).json({
			msg: error,
		});
	}
};

const updateTask = async (req, res) => {
	try {
		// obtain id provided by the user
		const { id: taskId } = req.params;
		const providedData = req.body;
		const task = await Task.findOneAndUpdate({ _id: taskId }, providedData, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			task,
		});
	} catch (error) {
		res.status(500).json({
			msg: error,
		});
	}
};

module.exports = {
	getAllTask,
	getSingleTask,
	createTask,
	updateTask,
	deleteTask,
};
