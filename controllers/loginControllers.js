let schema = require("../model/schema");

// console.log(schema);

const createUser = (req, res) => {
	schema = [...schema, req.body];
	res.json(schema);
};

const getUser = (req, res) => {
	const { id } = req.query;
	// make a copy of the schema
	const newSchema = [...schema];
	// filter the newSchema based on the received id
	let filteredSchema = newSchema.find((item) => item.id === Number(id));
	// if the user provides an id that does not exist in our schema, inform the user
	if (id && !filteredSchema) {
		try {
			return res.json({
				status: "error",
				message: `User with id: ${id} doesnot exist`,
			});
		} catch (error) {
			console.log("Error is from app.get:", error);
		}
	}

	// if the user doesnot provide an id, return the entire newSchema
	if (!id) {
		try {
			return res.json(newSchema);
		} catch (error) {
			console.log("error is from app.get when the user doesnot provide an id");
		}
	}
	try {
		res.json(filteredSchema);
	} catch (error) {
		console.log("error is from app.get");
	}
};

const updateUser = (req, res) => {
	// obtain the id of the user to be updated,
	const { id } = req.params;
	// obtain the detail to be updated
	const { name } = req.body;

	// find the user that the client wants to edit
	let userToBeEdited = schema.find((item) => item.id === Number(id));
	// if The id given by the client does not correspond to a user on the schema, alert the client

	if (!userToBeEdited) {
		return res.json({
			status: "Not successful",
			message: "No such user present in the database",
		});
	}

	// If the id provided by the client exists, change the name of said user to the name provided by the client in the req.body
	userToBeEdited.name = name;

	// Inform the client that their action / request to change / update said user information was successful.
	res.json(`User with the id: ${id} has been updated`);
};

const deleteUser = (req, res) => {
	// obtain the id the user the client wants to delete
	const { id } = req.params;
	// if the id provided by the client does not exist, inform the client
	const userToBeDeleted = schema.find((item) => item.id === Number(id));
	if (!userToBeDeleted) {
		return res.json({
			status: "unsuccessful",
			message: `User with id: ${id} doesnot exist`,
		});
	}
	// if the id provided exist, filter the schema
	schema = schema.filter((item) => item.id !== Number(id));
	// alert the client of a successful action
	res.json({
		status: "success",
		message: `User with id: ${id} was successfully deleted`,
	});
};

module.exports = {
	createUser,
	getUser,
	updateUser,
	deleteUser,
};
