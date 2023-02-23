const createUser = (req, res) => {
	const { name, email, password, phone } = req.body;
	console.log(`name: ${name} || password: ${password}`);
	res.send(" good doing bussiness with you");
};

module.exports = createUser;
