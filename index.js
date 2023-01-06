const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

app.use([authorize, logger]);

app.get("/", (req, res) => {
	res.send(
		`<h2> Welcome to the Home page</h2> <a href="/about">Go to the About page</a>`
	);
});

app.get("/about", (req, res) => {
	res.send("About page");
});

app.listen(5500, () => console.log("server is running on port 5500"));
