const arr = [1, 2, 3, 4, 5];

// ===REDUCE function===
// function mul(total, value) {
// 	console.log(`value: ${value} || total: ${total}`);
// 	total = value + total;
// 	console.log("================");
// 	console.log(`value: ${value} || total: ${total}`);
// 	return total;
// }

// let output = arr.reduce(mul, 0);

// ===================
// require the crypto library
const crypto = require("crypto");
// Define the algorithm
// const hash = crypto.createHash("md5");
// // Define the key. Key is the data you want to encode
// const data = hash.update("Story for the god");
// // create a digest to have accesss to the generated hash code from the code above
// const gen_hash = data.digest("hex");

// console.log("The generated hash code is: ", gen_hash);

// ======================== ENCODING A FILE=========
const fs = require("fs");

// define the algorithm to use for encoding
const algorithm = "md5";
//  create the hash object and define/specify the algorithm used
const hash = crypto.createHash(algorithm);

// read the content of the file using streams
const rs = fs.createReadStream("key.txt");
// listen for the data event emitted whenever a new chunk of the file being read is available
rs.on("data", (chunk) => {
	// pass the chunk received to the hash object created
	hash.update(chunk);
});

// listen for the end of the stream
rs.on("end", () => {
	// create a digest to access the generated hash from the chunk sent using the update(), and specify the format
	const gen_hash = hash.digest("hex");
	console.log(`The resulting hash is: ${gen_hash}`);
	fs.writeFile("key.txt", gen_hash, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("file writtenn successfully!!");
		}
	});
});
