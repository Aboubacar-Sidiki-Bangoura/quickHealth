const express = require('express');
const router = express.Router();
const Imprevu = require('../models/Imprevu');
const Config = require('../models/Config');
//pour l'ajout

router.post('/imprevuAjout', async (req, res) => {
	const config = await Config.findOne({ id: 1 });
	const imp = new Imprevu({
		id: config.imprevuNumber + 1,
		uidMedecin: req.body.uidMedecin,
		dateDebut: req.body.dateDebut,
		tempsDebut: req.body.tempsDebut,
		dateFin: req.body.dateFin,
		tempsFin: req.body.tempsFin,
		motif: req.body.motif
	});
	config.imprevuNumber += 1;
	try {
		const saveImprevu = await imp.save();
		await Config.findByIdAndUpdate(conf._id, config, (err, res) => {
			if (err) throw Error(err);
			console.log('User insertion succeeded');
		});
		console.log(saveImprevu);
		res.json(saveImprevu);
	} catch (err) {
		res.status(400).send(err);
	}
});

//pour l'affichage

router.get('/imprevuList', (req, res) => {
	Imprevu.find({}, function (errors, data) {
		if (errors) {
			throw errors;
		} else {
			res.json(data);
		}
	});
});

//pour la suppression

router.delete('/imprevuDelete/:id', (req, res) => {
	Imprevu.findByIdAndDelete({ _id: req.params.id }, function (errors, data) {
		if (errors) {
			throw errors;
		} else {
			console.log(data);
			res.json(data);
		}
	});
});

module.exports = router;
