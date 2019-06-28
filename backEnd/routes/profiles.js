const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Medecin = require('../models/Medecin');
const Secretaire = require('../models/Secretaire');
const Patient = require('../models/Patient');
const Cabinet = require('../models/Cabinet');

router.post('/profile', async (request, response) => {
	if (!request.body.uid) return response.status(400).json({ errors: { msg: 'uid required' } });
	const user = await User.findOne({ uid: request.body.uid });
	if (!user) return response.status(400).json({ errors: { msg: 'User inexistant' } });
	const userType = await (user.niveau == 1
		? Medecin.findOne({ uid: user.uid })
		: user.niveau == 2
			? Secretaire.findOne({ uid: user.uid })
			: user.niveau == 3 ? Patient.findOne({ uid: user.uid }) : { nom: 'root', prenom: 'root' });
	user.password = '';
	return response.status(200).json({ user, description: userType });
});

router.get('/medecins', async (request, response) => {
	let medecins = await User.find({ niveau: '1' });
	if (!medecins) return response.status(400).json({ errors: { msg: 'Pas de medecin' } });
	medecins = medecins.map(({ _id, uid, email, niveau }) => {
		return {
			_id,
			uid,
			email,
			niveau
		};
	});
	response.status(200).json({ medecins });
});

router.get('/cabinet', async (request, response) => {
	const cabinet = await Cabinet.findOne({ id: 1 });
	if (!cabinet) return response.status(400).json({ errors: 'Erreur info cabinet indisponible' });
	// console.log(cabinet);
	return response.status(200).json({ cabinet });
});

router.get('/patients', async (request, response) => {
	let patients = await Patient.find({});
	/*let user = null;
	let patientsEmail = await patients.map(async (patient) => {
		user = await User.findOne({ uid: patient.uid });
		patient.email = user.email;
		console.log(patient);
		return patient;
	});*/
	if (!patients) return response.status(400).json({ errors: 'Aucun patient disponible' });
	return response.status(200).json({ patients });
});

module.exports = router;
