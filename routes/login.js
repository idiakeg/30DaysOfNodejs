const express = require("express");

const router = express.Router();

const {
	createUser,
	getUser,
	updateUser,
	deleteUser,
} = require("../controllers/loginControllers");

// post
router.post("/", createUser);

// get
router.get("/", getUser);

// put
router.put("/:id", updateUser);

// delete
router.delete("/:id", deleteUser);

module.exports = router;
