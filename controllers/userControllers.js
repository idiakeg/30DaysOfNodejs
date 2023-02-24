const getHash = require("../Hmac");
const userModel = require("../model/userSchema");

const createUser = async (req, res) => {
	const { name, email, password, phone } = req.body;

	const Password = getHash(password, phone);

	// user data to be stored
	const data = {
		name,
		email,
		Password,
		phone,
	};

	try {
		await userModel.create(data);
		res.redirect("/public/success.html");
	} catch (error) {
		res.status(500).send("An error occured");
	}
};

module.exports = createUser;
