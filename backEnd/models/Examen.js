const mongoose = require('mongoose');

const examenSchema = new mongoose.Schema({
	id: Number,
	type: String,
	Remarque: String,
	uidPatient: Number
});

const Examen = mongoose.model('examen', examenSchema);
module.exports = Examen;
