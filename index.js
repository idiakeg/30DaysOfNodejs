const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// schema definition
let schema = [];

// post
app.post("/login", (req, res) => {
	schema = [...schema, req.body];
	res.json(schema);
});

// get
app.get("/login", (req, res) => {
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
});

// put
app.put("/login/:id", (req, res) => {
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
});

app.listen(5500, () => console.log("server is running on port 5500"));
