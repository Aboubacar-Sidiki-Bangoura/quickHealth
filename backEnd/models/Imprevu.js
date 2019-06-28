const mongoose = require('mongoose');

const imprevuSchema = new mongoose.Schema({
	id: Number,
	uidMedecin: Number,
	dateDebut: String,
	tempsDebut: String,
	dateFin: String,
	tempsFin: String,
	motif: String
});

const Imprevu = mongoose.model('imprevu', imprevuSchema);

module.exports = Imprevu;
