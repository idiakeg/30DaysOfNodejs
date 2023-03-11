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
app.get("/admin", (req, res) => {
	res.sendFile(path.join(__dirname, "static/admin.html"));
});

// =======Web Socket =======
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
	console.log("mew client connected");
	ws.on("message", (data) => {
		console.log(data);
	});
	ws.on("close", () => {
		console.log("client has disconnected");
	});
	ws.on("error", (error) => {
		console.log("Something went wrong");
	});
});

server.listen(port, () => {
	console.log(`server is running on port: ${port}`);
});
