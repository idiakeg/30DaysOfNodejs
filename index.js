const express = require("express");
const app = express();
const products = require("./data");

// the newProducts is an abstraction of the actual products, it displays only the name and year of the products. If the user wants to see the review of a specific product, the would have to specify which product they want and they would get access to the name, year and review of said product.
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
