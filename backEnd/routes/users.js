const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Medecin = require('../models/Medecin');
const Secretaire = require('../models/Secretaire');
const Patient = require('../models/Patient');
const Config = require('../models/Config');
const jwt = require('jsonwebtoken');

//const passport = require('passport');
const { registerValidation, loginValidation } = require('../models/validation/userValidation');

router.post('/register', async (request, response) => {
	//Detection des erreurs dans les information
	const { error } = registerValidation(request.body);
	//S'il y a des erreurs
	if (error) return response.status(400).json({ errors: error.details[0].message });
	//	return response.json({});
	//Vérifier si l'utilisateur existe déjà
	const userExist = await User.findOne({ email: request.body.email });
	if (userExist) return response.status(400).json({ errors: 'Email existe déjà essayer un autre' });
	//Hashing the password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(request.body.password, salt);
	/*
	const config = new Config({
		id: 1,
		userNumber: 1,
		medecinNumber: 0,
		secretaireNumber: 0,
		patientNumber: 0
	});
	*/
	//const config = new Config();
	const conf = await Config.findOne({ id: 1 });
	const newUser = new User({
		uid: conf.userNumber + 1,
		email: request.body.email,
		password: hashedPassword,
		niveau: request.body.typeUser
	});

	let user = null;
	if (request.body.typeUser === '1') {
		user = new Medecin({
			id: conf.medecinNumber + 1,
			uid: conf.userNumber + 1,
			nom: request.body.nom,
			prenom: request.body.prenom,
			CIN: request.body.cin,
			naissance: request.body.naissance,
			telephone: request.body.telephone,
			adresse: request.body.adresse,
			sexe: request.body.civiliteH ? 'Homme' : 'Femme'
		});
		conf.medecinNumber += 1;
		conf.userNumber += 1;
	} else if (request.body.typeUser === '2') {
		user = new Secretaire({
			id: conf.secretaireNumber + 1,
			uid: conf.userNumber + 1,
			nom: request.body.nom,
			prenom: request.body.prenom,
			cin: request.body.cin,
			naissance: request.body.naissance,
			telephone: request.body.telephone,
			adresse: request.body.adresse,
			sexe: request.body.civiliteH ? 'Homme' : 'Femme'
		});
		conf.medecinNumber += 1;
		conf.userNumber += 1;
	} else {
		user = new Patient({
			id: conf.patientNumber + 1,
			uid: conf.userNumber + 1,
			nom: request.body.nom,
			prenom: request.body.prenom,
			cin: request.body.cin,
			naissance: request.body.naissance,
			telephone: request.body.telephone,
			adresse: request.body.adresse,
			sexe: request.body.civiliteH ? 'Homme' : 'Femme'
		});
		conf.patientNumber += 1;
		conf.userNumber += 1;
	}
	try {
		const savedUser = await newUser.save();
		const userTypeSaved = await user.save();
		await Config.findByIdAndUpdate(conf._id, conf, (err, res) => {
			if (err) throw Error(err);
			console.log('User insertion succeeded');
		});
		savedUser.password = null;
		const token = jwt.sign({ _id: savedUser._id, savedUser }, process.env.TOKEN_SECRET);
		response
			.header('auth-Token', token)
			.status(200)
			.json({ token, user: savedUser, description: userTypeSaved });
	} catch (errors) {
		console.log('Errors on user insertion');
		return response.status(500).json(errors);
	}
});

router.post('/login', async (request, response) => {
	//Detection des erreurs dans les information
	const { error } = loginValidation(request.body);
	//S'il y a des erreurs
	if (error) return response.status(400).json({ errors: error.details[0].message });
	//Vérifier si l'email existe déjà
	const user = await User.findOne({ email: request.body.email });
	if (!user) return response.status(400).json({ errors: 'Email ou mot de pass incorrect!' });
	//Vérifier l'authenticité du mot de passe
	const valid = await bcrypt.compare(request.body.password, user.password);
	if (!valid) return response.status(400).json({ errors: 'Email ou mot de pass incorrect!' });
	//Search user's description
	const id = parseInt(user.uid);
	const description = await (user.niveau == 1
		? Medecin.findOne({ uid: user.uid })
		: user.niveau == 2
			? Secretaire.findOne({ uid: user.uid })
			: user.niveau == 3 ? Patient.findOne({ uid: id }) : { nom: 'root', prenom: 'root' });
	//Creation et envoie du token d'authentification
	console.log(description);
	user.password = null;
	const token = jwt.sign({ _id: user._id, user }, process.env.TOKEN_SECRET);

	response.header('auth-Token', token).json({ token, user, description });
});

module.exports = router;
