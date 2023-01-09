const express = require("express");
const app = express();
const routes = require("./routes/login");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// register the routes to take effect whenever the base url "/login" is visited / requested
app.use("/login", routes);

app.get("/", (req, res) => {
	res.send("Welcome!! Go to the /login route to access users");
});

app.listen(5500, () => console.log("server is running on port 5500"));
