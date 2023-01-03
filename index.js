const express = require("express");

const app = express();

// use the express middleware(express.static) that serves static pages, to use it, register the middleware using app.use()

// app.use(express.static("public"));

app.get("/", (req, res) => {
	res.json({
		status: "successfull",
		location: "Nigeria",
	});
});

// this block of cocde runs if the client requests a page that we donot have.

app.all("*", (req, res) => {
	res.status(404).send("Resource not found");
});

app.listen(5500, () => console.log("server is running on port 5500"));
