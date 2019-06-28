const mongoose = require('mongoose');

const medecinSchema = new mongoose.Schema({
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
		type: Date
	},
	telephone: {
		type: String,
		trim: true
	},
	adresse: {
		type: String,
		trim: true
	},
	numeroAttribution: {
		type: String,
		trim: true,
		default: ''
	}
});

const Medecin = mongoose.model('medecin', medecinSchema);

module.exports = Medecin;
