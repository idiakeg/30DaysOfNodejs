// connection string for monogodvb atlas

// const connectionString =
// 	"mongodb+srv://Godspower:711292@Gp@nodeexpressprojects.mrmqrh4.mongodb.net/?retryWrites=true&w=majority";

const { MongoClient } = require("mongodb");

// initialize DB
let dbConnection;

// connection string when working locally
const connectionString = "mongodb://0.0.0.0:27017/Testing";

module.exports = connectionString;
