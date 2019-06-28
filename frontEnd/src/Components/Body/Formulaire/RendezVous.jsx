import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './FormNewUser.css';
import './RendezVous.css';
class RendezVous extends Component {
	state = {
		uidPatient: '',
		uidMedecin: '',
		date: '',
		heure: '',
		type: ''
	};

	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleOnSubmit = async (event) => {
		event.preventDefault();
		const body = Object.assign({}, this.state);
		const token = this.props.auth !== undefined ? this.props.auth.token : ' ';
		let response = await fetch('http://localhost:5000/rendezvous/rendezvous', {
			headers: new Headers({
				'Content-Type': 'application/json',
				'auth-token': token
			}),
			method: 'POST',
			body: JSON.stringify(body)
		});
		response = await response.json();
		console.log(response);
		if (response.errors) return alert(response.errors);
		alert(`Insertion rendez-vous ${response}`);
		this.setState({ rendezvous: response.rendezvous });
		this.props.history.push('/agenda');
	};

	render () {
		if (!this.props.auth.status) return <Redirect to="/login" />;

		return (
			<div className="rendezvous">
				<h1>Ajouter un nouveau Rendez-Vous</h1>
				<form onSubmit={this.handleOnSubmit} className="myformRendezVous">
					<label>
						UID du patient:
						<input type="text" name="uidPatient" onChange={this.handleOnChange} />
					</label>
					<br />
					<label>
						UID du medecin:
						<input type="text" name="uidMedecin" onChange={this.handleOnChange} />
					</label>
					<br />
					<label>
						Date:
						<input type="date" name="date" onChange={this.handleOnChange} />
					</label>
					<label>
						Heure:
						<input type="time" name="heure" onChange={this.handleOnChange} />
					</label>
					<br />
					<label>
						Type:
						<input type="text" name="type" onChange={this.handleOnChange} />
					</label>
					<br />
					<input type="reset" value="Vider" />
					<input type="submit" value="Valider" />
				</form>
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

export default connect(mapSateToProps)(RendezVous);
