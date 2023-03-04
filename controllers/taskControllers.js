const Task = require("../models/Task");
const asyncWrapper = require("../middlewares/async");

const getAllTask = asyncWrapper(async (req, res) => {
	const task = await Task.find({});
	res.status(200).json({
		task: task,
	});
});

const getSingleTask = asyncWrapper(async (req, res) => {
	const { id: taskId } = req.params;
	const task = await Task.findOne({ _id: taskId });
	if (!task) {
		return res.status(404).json({
			msg: "No such task exists",
		});
	}
	res.status(200).json(task);
});

const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.status(200).json(task);
});

const deleteTask = asyncWrapper(async (req, res) => {
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
});

const updateTask = asyncWrapper(async (req, res) => {
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
});

module.exports = {
	getAllTask,
	getSingleTask,
	createTask,
	updateTask,
	deleteTask,
};
