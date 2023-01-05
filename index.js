const express = require("express");
const app = express();
const logger = require("./logger");

// To use the middleware, register it using the app.use() method. This method adds the middleware function to all the routes(i think it does so for all the get routes, will see if it does the same for other routes). The postion / order of writing, calling the app.use() matters
app.use("/about", logger);

app.get("/", (req, res) => {
	res.send(
		`<h2> Welcome to the Home page</h2> <a href="/about">Go to the About page</a>`
	);
});

app.get("/about", (req, res) => {
	res.send("About page");
});

app.listen(5500, () => console.log("server is running on port 5500"));
