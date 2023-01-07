const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// schema definition
let schema = [];

app.get("/", (req, res) => {
	res.send(
		`<h2> Welcome to the Home page</h2> <a href="/about">Go to the About page</a>`
	);
});

app.get("/about", (req, res) => {
	return res.send("About page");
});

app.post("/login", (req, res) => {
	schema.push(req.body);
	res.send(schema);
});

app.get("/login", (req, res) => {
	const { id } = req.query;
	// make a copy of the schema
	const newSchema = [...schema];
	// filter the newSchema based on the received id
	let filteredSchema = newSchema.find((item) => item.id === Number(id));
	// if the user provides an id that does not exist in our schema, inform the user
	if (id && !filteredSchema) {
		return res.send(`User with id: ${id} doesnot exist`);
	}

	// if the user doesnot provide an id, return the entire newSchema
	if (!id) {
		return res.send(newSchema);
	}
	res.send(filteredSchema);
});

app.listen(5500, () => console.log("server is running on port 5500"));
