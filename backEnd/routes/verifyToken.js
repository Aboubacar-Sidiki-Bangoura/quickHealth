const jwt = require('jsonwebtoken');

function authenticate (request, response, next) {
	const token = request.header('auth-token');
	if (!token) return response.status(400).send('Accès refuser!');

	try {
		const userData = jwt.verify(token, process.env.TOKEN_SECRET);
		request.user = userData;
		next();
	} catch (error) {
		response.status(400).send({ errors: { msg: 'Forbiden' } });
	}
}

module.exports.authenticate = authenticate;
