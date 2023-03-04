const { CustomApiError } = require("../errors/customError");

const errorHandler = (err, req, res, next) => {
	if (err instanceof CustomApiError) {
		return res.status(err.statusCode).json({
			msg: err.message,
		});
	}

	res.status(500).json({
		msg: err.message,
	});
};

module.exports = errorHandler;
