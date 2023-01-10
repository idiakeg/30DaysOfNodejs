const express = require("express");
const port = 5500;
const router = require("./routes/taskRoute");

const app = express();

// middleware definitions
app.use("/api/v1/task", router);

app.listen(port, console.log(`Server is running on port: ${port}`));
