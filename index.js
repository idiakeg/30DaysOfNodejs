const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
require("dotenv").config();
const path = require("path");
const port = process.env.PORT;
