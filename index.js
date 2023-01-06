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
	let newSchemas = [...schema];
	id &&
		// find the requested id
		(newSchemas = schema.find((item) => item.id === Number(id)));

	res.send(newSchemas);
});

app.listen(5500, () => console.log("server is running on port 5500"));
