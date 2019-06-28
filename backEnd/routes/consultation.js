const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Medecin = require('../models/Medecin');
const Secretaire = require('../models/Secretaire');
const Patient = require('../models/Patient');
const Cabinet = require('../models/Cabinet');

//pour l'affichage

router.get('/ordonnance', function (req, res) {
	Ordonnance.find({}, function (errors, data) {
		if (errors) {
			throw errors;
		} else {
			res.json(data);
		}
	});
});

//pour l'ajout

router.post('/ordonnance', async (req, res) => {
	console.log(req.body);
	const ordonnance = new Ordonnance({
		cin: req.body.cin,
		NomMedicament: req.body.medicament,
		Recommandation: req.body.recommandation,
		PeriodeTraitement: req.body.Periode,
		Quantite: req.body.Quantite,
		Matin: req.body.matin,
		Midi: req.body.midi,
		Soir: req.body.soir
	});
	console.log(ordonnance);
	try {
		const saveOrdonnance = await ordonnance.save();

		res.json({ saveOrdonnance });
		console.log(saveOrdonnance);
	} catch (err) {
		res.status(400).send({ err });
	}
});

//pour la suppression
router.delete('/ordonnance/:id', (req, res) => {
	Ordonnance.findByIdAndDelete({ _id: req.params.id }, function (errors, data) {
		if (errors) {
			throw errors;
		} else {
			console.log(data);
			res.json(data);
		}
	});
});

module.exports = router;
