const express = require("express");
const router = express.Router();

// obtain the controllers
const {
	getAllTask,
	getSingleTask,
	createTask,
	updateTask,
	deleteTask,
} = require("../controllers/taskControllers");

// use the other routing syntax
router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
