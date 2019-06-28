const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
	id: {
		type: Number
	},
	userNumber: {
		type: Number,
		min: 0
	},
	medecinNumber: {
		type: Number,
		min: 0
	},
	secretaireNumber: {
		type: Number,
		min: 0
	},
	patientNumber: {
		type: Number,
		min: 0
	},
	imprevuNumber: {
		type: Number,
		min: 0,
		default: 0
	},
	rendezVousNumber: {
		type: Number,
		min: 0,
		default: 0
	}
});

const Config = mongoose.model('config', configSchema);

module.exports = Config;
