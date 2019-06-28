import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './QuickHealth.css';
import Entete from './Components/Header/Entete';
import NavigationBar from './Components/LeftSideBar/NavigationBar';
import Accueil from './Components/Body/Accueil';
import Connexion from './Components/Body/Connexion';
import MessagePanel from './Components/RightSideBar/MessagePanel';
import FormNewUser from './Components/Body/Formulaire/FormNewUser';
import Consultation from './Components/Body/Formulaire/Consultation';
import Agenda from './Components/Body/Agenda/Agenda';
import Profile from './Components/Body/Profile';
import Patients from './Components/Body/Patients';
// import Indisponibilite from './Components/Body/Formulaire/Indisponibilite';
import ImprevuList from './Components/Body/ImprevuList';
import Imprevus from './Components/Body/Imprevus';
import RendezVous from './Components/Body/Formulaire/RendezVous';
import Unfound from './Components/Body/Unfound';

class QuickHealth extends Component {
	render () {
		return (
			<Router>
				<div className="quickHealth">
					<div className="enTete">
						<Entete />
					</div>
					<div className="navigationBar">
						<NavigationBar />
					</div>
					<div className="body">
						<Switch>
							<Route exact path="/" component={Accueil} />
							<Route path="/login" component={Connexion} />
							<Route path="/register" component={FormNewUser} />
							<Route path="/consultation/:uidPatient" component={Consultation} />
							<Route path="/consulter" component={null} />
							<Route path="/agenda/:idMedecin" component={Agenda} />
							<Route path="/patients" component={Patients} />
							<Route path="/profile/:uid" component={Profile} />
							<Route path="/indisponibilite" component={ImprevuList} />
							<Route path="/ajouterrendezvous" component={Imprevus} />
							<Route path="/rendezvous" component={RendezVous} />
							<Route path="/agenda" component={Agenda} />
							<Route path="*" component={Unfound} />
						</Switch>
					</div>
					<div className="rightBar">
						<MessagePanel />
					</div>
				</div>
			</Router>
		);
	}
}

export default QuickHealth;
