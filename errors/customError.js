// create a new instance of error that extends the javascript error class

class CustomApiError extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
	}
}

// a function that creates a new instance of the error for us
const createCustomError = (msg, statusCode) => {
	return new CustomApiError(msg, statusCode);
};

module.exports = {
	CustomApiError,
	createCustomError,
};
