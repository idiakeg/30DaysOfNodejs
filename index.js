const express = require("express");

const app = express();

// middleware definition
function goo(req, res, next) {
	const { method, url } = req;
	const year = new Date().getFullYear();
	console.log(`Method: ${method} | Url: ${url} | Year: ${year}`);
	next();
}

// To use the middleware, register it using the app.use() method
// app.use(goo);

// Alternative to registering the middleware using app.use(), reference the middleware function in the app.get(), between the path and  the callback function

app.get("/", goo, (req, res) => {
	res.send(
		`<h2> Welcome to the Home page</h2> <a href="/about">Go to the About page</a>`
	);
});

app.get("/about", goo, (req, res) => {
	res.send("About page");
});

app.listen(5500, () => console.log("server is running on port 5500"));
