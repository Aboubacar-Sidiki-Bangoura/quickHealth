const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
	id: {
		type: Number,
		index: true
	},
	idRendezVous: {
		type: Number
	},
	idOrdonnance: {
		type: Number
	},
	idMedecin: {
		type: Number
	},
	idPatient: {
		type: Number
	},
	remarques: {
		type: Array
	}
});

const Consultation = mongoose.model('consultation', consultationSchema);

module.exports = Consultation;
