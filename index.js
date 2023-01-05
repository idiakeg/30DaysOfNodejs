const express = require("express");
const app = express();
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

	singleProduct
		? res.json(singleProduct)
		: res.status(404).send("This product does not exist");
});

// =================== v1 =============
app.get("/api/v1/query", (req, res) => {
	// make a copy of the products array as you will need to make changes and it is better to make changes to your own copy of the products array rather than directly change the schema
	let searchedProducts = [...products];
	// destructure the query objejct to obtain the search term and limit value
	const { search, limit } = req.query;
	// if the search query exists, filter the searchedProducts array nd return whichever product contains the search term
	search &&
		(searchedProducts = searchedProducts.filter(({ name }) =>
			// to achieve this you can either use includes or startsWith
			name.toLowerCase().includes(search.toLowerCase())
		));

	// if the limit query exists, only display x(limit value) number of items that match the search paramter
	limit && (searchedProducts = searchedProducts.slice(0, Number(limit)));
	res.status(200).json({
		success: true,
		data: searchedProducts,
		// data:
		// 	searchedProducts.length < 1 ? "No such products exist" : searchedProducts,
	});
});

// for pages/ products that do not exist
app.all("*", (req, res) => {
	res.status(404).send("This pages does not exist");
});

app.listen(5000, () => console.log("server is running on port 5000"));
