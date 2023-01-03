const express = require("express");
const app = express();
const products = require("./data");
const newProduct = products.map((product) => {
	const { name, year } = product;
	return {
		name,
		year,
	};
});

app.get("/", (req, res) => {
	res
		.status(200)
		.send(`<h1>Welcome</h1><a href="/api/products">Go to products</a>`);
});

app.get("/api/products", (req, res) => {
	res.status(200).json(newProduct);
});

app.listen(5500, () => console.log("server is running on port 5500"));
