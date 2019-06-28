const mongoose = require('mongoose');

const secretaireSchema = new mongoose.Schema({
	id: {
		type: Number
	},
	uid: {
		type: Number
	},
	nom: {
		type: String,
		trim: true
	},
	prenom: {
		type: String,
		trim: true
	},
	sexe: {
		type: String
	},
	cin: {
		type: String,
		trim: true
	},
	naissance: {
		type: Date,
		trim: true
	},
	telephone: {
		type: String,
		trim: true
	},
	adresse: {
		type: String,
		trim: true
	}
});

const Secretaire = mongoose.model('secretaire', secretaireSchema);

module.exports = Secretaire;
