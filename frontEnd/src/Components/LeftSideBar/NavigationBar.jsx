import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationBar.css';

class NavigationBar extends Component {
	render () {
		return (
			<div className="navigation">
				<div>
					<NavLink exact to="/">
						<img src={require('../../Public/Icons/house.svg')} alt="Icon accueil" />
						<span>Accueil</span>
					</NavLink>
				</div>
				<div>
					<NavLink to="/consultation/123">
						<img src={require('../../Public/Icons/consulting.svg')} alt="Icon consultation" />
						<span>Consultation</span>
					</NavLink>
				</div>
				<div>
					<NavLink to="/agenda">
						<img src={require('../../Public/Icons/calendar.svg')} alt="Icon agenda" />
						<span>Agenda</span>
					</NavLink>
				</div>
				<div>
					<NavLink to="/patients">
						<img src={require('../../Public/Icons/group.svg')} alt="Icon patient" />
						<span>Patient</span>
					</NavLink>
				</div>
				<div>
					<NavLink to="/medicaments">
						<img src={require('../../Public/Icons/medicaments.svg')} alt="Icon médicaments" />
						<span>Médicaments</span>
					</NavLink>
				</div>
				<div>
					<NavLink to="/indisponibilite">
						<img src={require('../../Public/Icons/appointment.svg')} alt="Icon indisponibilité" />
						<span>Indisponibilité</span>
					</NavLink>
				</div>
			</div>
		);
	}
}

export default NavigationBar;
