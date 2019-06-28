const mongoose = require('mongoose');

const ordonnaceSchema = new mongoose.Schema({
	cin: {
		type: String
	},

	Quantite: {
		type: String
	},

	Matin: {
		type: Boolean
	},
	Midi: {
		type: Boolean
	},
	Soir: {
		type: Boolean
	},
	NomMedicament: {
		type: String
	},
	Recommandation: {
		type: String
	},
	PeriodeTraitement: {
		type: String
	}
});

const Ordonnance = mongoose.model('Ordonnance', ordonnaceSchema);

module.exports = Ordonnance;
