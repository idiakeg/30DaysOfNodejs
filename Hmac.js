const crypto = require("crypto");

// define the function to hmac the user's password

const getHash = (pass, phone) => {
	// pass is the password provided by the user in the html form

	// instantiate the hmac using the phone number provided by the user as the key
	const hmac = crypto.createHmac("sha512", phone);
	// provided the data(pass) to be updated
	const data = hmac.update(pass);
	// create the hmac in the specifies format(hex)
	const genHmac = data.digest("hex");
	// return(save) the hmac'd password in the function
	return genHmac;
};

module.exports = getHash;
