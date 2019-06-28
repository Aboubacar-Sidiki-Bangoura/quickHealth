const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
	_id: { type: mongoose.Schema.Types.ObjectId },
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
		type: String
	},
	adresse: {
		type: String
	}
});

const Patient = mongoose.model('patient', patientSchema);

module.exports = Patient;
