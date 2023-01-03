const express = require("express");
const app = express();
const port = 9000;
const products = require("./data");

app.get("/", (req, res) => {
	res
		.status(200)
		.send(`<h1>Welcome</h1><a href="/api/products">Go to products</a>`);
});

// get all products
app.get("/api/products", (req, res) => {
	const newProduct = products.map((product) => {
		const { name, year } = product;
		return {
			name,
			year,
		};
	});
	res.status(200).json(newProduct);
});

// get soecific product by id
app.get("/api/products/:id", (req, res) => {
	const singleProduct = products.find(
		(product) => product.id === Number(req.params.id)
	);

	res.json(singleProduct);
});

app.listen(5000, () => console.log("server is running on port 5000"));
