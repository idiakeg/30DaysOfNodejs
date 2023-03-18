const WebSocket = require("ws");
const http = require("http");
const express = require("express");
const app = express();
const port = 6061;
const path = require("path");

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
	console.log("Client connected to the server");
	ws.onmessage = () => {
		console.log("message received");
	};
	ws.onclose = () => {
		console.log("client disconnected");
	};
});

server.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
