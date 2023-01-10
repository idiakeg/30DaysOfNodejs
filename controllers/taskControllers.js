const getAllTask = (req, res) => {
	res.send("Route to get all task");
};

const getSingleTask = (req, res) => {
	res.send("Rpute to get Single task");
};

const createTask = (req, res) => {
	res.send("Route to create a new task");
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

console.log(module.exports);
