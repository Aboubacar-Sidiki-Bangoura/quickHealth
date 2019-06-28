const mongoose = require('mongoose');

const remarqueSchema = new mongoose.Schema({
	id: Number,
	type: String,
	Remarque: String,
	uidPatient: Number
});

const Remarque = mongoose.model('remarque', remarqueSchema);
module.exports = Remarque;
