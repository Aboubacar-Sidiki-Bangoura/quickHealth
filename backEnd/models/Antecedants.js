var mongoose = require('mongoose');

var AntecedentSchema = new mongoose.Schema({
	id: Number,
	type: String,
	Remarque: String,
	uidPatient: Number
});

module.exports = mongoose.model('antecedent', AntecedentSchema);
