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

app.get("/login/:id", (req, res) => {
	const { id } = req.params;
	// make a copy of the schema
	let newSchema = [...schema];
	let filteredSchemas = newSchema.find((item) => item.id === Number(id));
	// if the clients passes in an id, and the filtered schema return undefined, tell the client that we donot have data with specified id
	id && !filteredSchemas && res.send(`User with id: ${id} doesnot exist`);
	res.send(filteredSchemas);
});

app.listen(5500, () => console.log("server is running on port 5500"));
