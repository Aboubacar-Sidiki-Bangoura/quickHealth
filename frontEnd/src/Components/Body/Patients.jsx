import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import './Patients.css';
const stethoscope = require('../../Public/Icons/stethoscope.svg');
class Patients extends Component {
	state = {
		patients: null
	};

	componentDidMount () {
		const token = this.props.auth.token;
		fetch('http://localhost:5000/profiles/patients', {
			headers: new Headers({
				'Content-Type': 'application/json',
				'auth-token': token
			}),
			method: 'GET'
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.errors) return;
				this.setState({ patients: res.patients });
			})
			.catch((error) => console.log(error));
	}

	render () {
		const { auth } = this.props;
		if (!auth.status || auth.user.niveau > 2) return <Redirect to="login" />;

		const patients = this.state.patients;
		return patients == null ? (
			<h1>Chargement</h1>
		) : (
			<div className="patients">
				<h1>Liste des patients</h1>
				<table>
					<thead>
						<tr>
							<th>Profile</th>
							<th>Nom</th>
							<th>Prénom</th>
							<th>CIN</th>
							<th>Email</th>
							<th>Telephone</th>
							<th>Conulter</th>
						</tr>
					</thead>
					<tbody>
						{patients.map((patient) => {
							return (
								<tr key={patient.uid}>
									<td>
										<Link to={`/profile/${patient.uid}`}>{patient.uid}</Link>
									</td>
									<td>{patient.nom}</td>
									<td>{patient.prenom}</td>
									<td>{patient.cin}</td>
									<td>{patient.email}</td>
									<td>{patient.telephone}</td>
									<td>
										<Link to={`/consultation/${patient.uid}`}>
											<img src={stethoscope} alt="Stethoscope" />
										</Link>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapSateToProps = (state) => {
	//Properties from the store wich will be attaches to the store
	return {
		auth: { ...state.auth }
	};
};

export default connect(mapSateToProps)(Patients);
