const arr = [1, 2, 3, 4, 5];
const fs = require("fs");
const crypto = require("crypto");

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
// Define the algorithm
// const hash = crypto.createHash("md5");
// // Define the key. Key is the data you want to encode
// const data = hash.update("Story for the god");
// // create a digest to have accesss to the generated hash code from the code above
// const gen_hash = data.digest("hex");

// console.log("The generated hash code is: ", gen_hash);

// ======================== ENCODING A FILE=========

// define the algorithm to use for encoding
// const algorithm = "md5";
// //  create the hash object and define/specify the algorithm used
// const hash = crypto.createHash(algorithm);

// // read the content of the file using streams
// const rs = fs.createReadStream("key.txt");
// // listen for the data event emitted whenever a new chunk of the file being read is available
// rs.on("data", (chunk) => {
// 	// pass the chunk received to the hash object created
// 	hash.update(chunk);
// });

// listen for the end of the stream
// rs.on("end", () => {
// 	// create a digest to access the generated hash from the chunk sent using the update(), and specify the format
// 	const gen_hash = hash.digest("hex");
// 	console.log(`The resulting hash is: ${gen_hash}`);
// 	fs.writeFile("key.txt", gen_hash, (err) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log("file writtenn successfully!!");
// 		}
// 	});
// });

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const bufferedKey = Buffer.from(key);

function encrypt(text) {
	// create the cipheriv method
	const cipher = crypto.createCipheriv(algorithm, bufferedKey, iv);
	// update the cipher with the text you want to encrypt
	const encrypted = cipher.update(text);
	// obtain the buffer thet contains the value of the cipher object. it is similar to digest in hashing
	const final = cipher.final();
	return {
		encrypted,
		final,
	};
}

// sideNote: you can only run the update and final method on the created cipher method.

const { encrypted, final } = encrypt("God is good");
// the final and encrypted opbtained from the cipher final and update method call respectively are both biffers, merge both buffers together with the concat method
let moo = Buffer.concat([encrypted, final]).toString("hex");

console.log(moo);
