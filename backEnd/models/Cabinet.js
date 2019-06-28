const mongoose = require('mongoose');

const cabinetSchema = new mongoose.Schema({
	id: {
		type: Number,
		default: 1
	},
	code: Number,
	ville: String,
	pays: String,
	nom: String,
	adresse: String,
	telephone: String,
	email: String,
	description: String,
	localitsation: String
});

const Cabinet = mongoose.model('cabinet', cabinetSchema);

module.exports = Cabinet;
