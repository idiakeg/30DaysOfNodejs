const express = require("express");

const router = express.Router();

const {
	createUser,
	getUser,
	updateUser,
	deleteUser,
} = require("../controllers/loginControllers");

// // post
// router.post("/", createUser);

// // get
// router.get("/", getUser);

// // put
// router.put("/:id", updateUser);

// // delete
// router.delete("/:id", deleteUser);

router.route("/").get(getUser).post(createUser);
router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
