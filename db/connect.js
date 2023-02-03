const mongoose = require("mongoose");

// const connectionString =
// 	"mongodb+srv://Godspower:711292@Gp@nodeexpressprojects.mrmqrh4.mongodb.net/?retryWrites=true&w=majority";

// connection string when working locally
const connectionString = "mongodb://0.0.0.0:27017/Testing";

const connectDB = () => {
	mongoose.connect(connectionString);
};

module.exports = connectDB;
