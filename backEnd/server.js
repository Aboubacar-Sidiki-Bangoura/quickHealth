const express = require('express');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

//Request from different frontend
app.use(cors());

//Configure environnement variables
dotenv.config({ path: './Config/.env' });

//Connection to the Database
mongoose
	.connect(process.env.DB_LINK, { useNewUrlParser: true })
	.then(() => console.log('Database connection succeeded!'))
	.catch((error) => console.log('Database connection failed!'));
mongoose.set('useFindAndModify', false);
//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Connect flash
app.use(flash());

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/profiles', require('./routes/profiles'));
app.use('/consultation', require('./routes/consultation'));
app.use('/rendezvous', require('./routes/rendezvous'));
app.use('/imprevu', require('./routes/Imprevu'));

//Listened PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started with port ${PORT}`, Date()));
