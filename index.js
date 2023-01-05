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
app.use(goo);

app.get("/", (req, res) => {
	res.send(
		`<h2> Welcome to the Home page</h2> <a href="/about">Go to the About page</a>`
	);
});

app.get("/about", (req, res) => {
	res.send("About page");
});

app.listen(5500, () => console.log("server is running on port 5500"));
