const authorize = (req, res, next) => {
	const { user } = req.query;
	if (user) {
		req.user = {
			userName: user,
			id: 13,
		};
		console.log("Authorize middleware ran");
		next();
	} else {
		console.log("Unauthorized");
		return res.status(401).send("Unauthorized!!");
	}
	next();
};

module.exports = authorize;
