const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	uid: {
		type: Number,
		required: true,
		min: 0
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	niveau: {
		type: Number,
		required: true
	},
	infoMedecin: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'medecin'
		}
	],
	infoSecretaire: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'secretaire'
		}
	],
	infoPatient: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'patient'
		}
	]
});

const User = mongoose.model('user', userSchema);

module.exports = User;
