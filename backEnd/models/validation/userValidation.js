const Joi = require('@hapi/joi');

//Register validation
const registerValidation = (data) => {
	const schema = {
		nom: Joi.string().required(),
		prenom: Joi.string().required(),
		cin: Joi.string().required(),
		civiliteH: Joi.boolean().required(),
		civiliteF: Joi.boolean().required(),
		naissance: Joi.date().required(),
		email: Joi.string().email().required(),
		password: Joi.string().required().min(6),
		passwordConfirm: Joi.string().required().min(6),
		telephone: Joi.string().required(),
		adresse: Joi.string(),
		typeUser: Joi.number().required().min(1).max(3)
	};

	return Joi.validate(data, schema);
};

const loginValidation = (data) => {
	const schema = {
		//login: Joi.String().required(),
		email: Joi.string().required().email(),
		password: Joi.string().required().min(6),
		saveSession: Joi.boolean()
	};

	return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
