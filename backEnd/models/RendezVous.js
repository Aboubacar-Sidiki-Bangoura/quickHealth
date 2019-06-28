const mongoose = require('mongoose');

const rendezVous = new mongoose.Schema({
	id: Number,
	uidMedecin: Number,
	uidPatient: Number,
	date: Date,
	heure: String,
	type: String
});

const RendezVous = mongoose.model('rendezVous', rendezVous);
module.exports = RendezVous;
