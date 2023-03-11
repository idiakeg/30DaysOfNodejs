const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
require("dotenv").config();
const path = require("path");
const port = process.env.PORT;

const server = http.createServer(app);

// middleware definitons
app.use(express.static("static"));

// basic routes
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "static/index.html"));
});

app.get("/admin", (req, res) => {
	res.sendFile(path.join(__dirname, "static/admin.html"));
});

server.listen(port, () => {
	console.log(`server is running on port: ${port}`);
});
