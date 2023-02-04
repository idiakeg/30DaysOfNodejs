const mongoose = require("mongoose");

// const connectionString =
// 	"mongodb+srv://Godspower:711292@Gp@nodeexpressprojects.mrmqrh4.mongodb.net/?retryWrites=true&w=majority";

// connection string when working locally

const connectDB = (url) => {
	mongoose.connect(url);
};

module.exports = connectDB;
