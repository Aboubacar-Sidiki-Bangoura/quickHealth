const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

module.exports = (passport) => {
	passport.use(
		new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
			User.findOne({ email: email }).then((user) => {
				if (!user) {
					return done(null, false, { message: 'This user is not registred' });
				}

				//Compare password
				bcrypt.compare(password, user.passport, (error, isMatch) => {
					if (error) console.log(error);

					if (isMatch) {
						done(null, user);
					} else {
						done(null, false, { message: 'Incorrect password' });
					}
				});
			});
			//.catch((error) => console.log(error));
		})
	);

	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		User.findById(id, (err, user) => {
			done(err, user);
		});
	});
};
