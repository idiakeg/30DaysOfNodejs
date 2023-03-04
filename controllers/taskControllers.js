const Task = require("../models/Task");
const asyncWrapper = require("../middlewares/async");
const { createCustomError } = require("../errors/customError");

const getAllTask = asyncWrapper(async (req, res) => {
	const task = await Task.find({});
	res.status(200).json({
		task: task,
	});
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
	const { id: taskId } = req.params;
	const task = await Task.findOne({ _id: taskId });
	if (!task) {
		return next(
			createCustomError(`Task with id: ${taskId} doesnot exist`, 404)
		);
	}
	res.status(200).json(task);
});

const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.status(200).json(task);
});

const deleteTask = asyncWrapper(async (req, res, next) => {
	const { id: taskId } = req.params;
	const taskToBeDeleted = await Task.findOneAndDelete({
		_id: taskId,
	});

	if (!taskToBeDeleted) {
		return next(
			createCustomError(`task with id: ${taskId} doesnot exist`, 404)
		);
	}
	res.status(200).json({
		status: "success",
		msg: `task with id: ${taskId} was deleted`,
	});
});

const updateTask = asyncWrapper(async (req, res, next) => {
	// obtain id provided by the user
	const { id: taskId } = req.params;
	const providedData = req.body;
	const task = await Task.findOneAndUpdate({ _id: taskId }, providedData, {
		new: true,
		runValidators: true,
	});
	if (!task) {
		return next(
			createCustomError(`task with id: ${taskId} doesnot exist`, 404)
		);
	}
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
