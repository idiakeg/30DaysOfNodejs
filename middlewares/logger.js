// middleware definition
function logger(req, res, next) {
	const { method, url } = req;
	const year = new Date().getFullYear();
	console.log(`Method: ${method} | Url: ${url} | Year: ${year}`);
	next();
}

module.exports = logger;
