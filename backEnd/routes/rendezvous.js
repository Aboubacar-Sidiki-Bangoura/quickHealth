const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Medecin = require('../models/Medecin');
const Secretaire = require('../models/Secretaire');
const Patient = require('../models/Patient');
const Cabinet = require('../models/Cabinet');
const Config = require('../models/Config');
const RendezVous = require('../models/RendezVous');
//pour l'affichqge
router.get('/rendezvous', async (request, response) => {
	const rendezvous = await RendezVous.find({});
	if (!rendezvous)
		return response.status(400).json({ errors: { msg: 'Aucun rendez vous disponible' } });
	return response.status(200).json({ rendezvous });
});

//pour l'ajout
router.post('/rendezvous', async (request, response) => {
	console.log(request.body);
	const config = await Config.findOne({ id: 1 });
	const rendezVous = new RendezVous({
		id: config.rendezVousNumber + 1,
		uidPatient: request.body.uidPatient,
		uidMedecin: request.body.uidMedecin,
		date: request.body.date,
		heure: request.body.heure,
		type: request.body.type
	});
	try {
		const savedRendezVous = await rendezVous.save();
		let conf = await Config.findOneAndUpdate(
			{ id: 1 },
			{ rendezVousNumber: config.rendezVousNumber + 1 }
		);
		response.status(200).json({ rendezVous: savedRendezVous });
	} catch (errors) {
		response.status(400).json({ errors });
	}
});

//pour la suppression
router.delete('/rendezvous', async (request, response) => {
	if (!request.body.id)
		return response
			.status(400)
			.json({ errors: { msg: "L'identifiant du rendez-vous doit être fournie" } });
	const rendezvous = await RendezVous.findOneAndDelete({ id: request.body.id });
	if (!rendezvous)
		return response
			.status(400)
			.json({ errors: { msg: 'Erreur dans la suppression du rendez-vous' } });
	return response.status(200).json({ rendezvous });
});

module.exports = router;
