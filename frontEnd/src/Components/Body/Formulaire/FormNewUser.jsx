import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authenticateUser } from '../../../store/actions/authActions';
import './FormNewUser.css';

class FormNewUser extends Component {
	state = {
		nom: '',
		prenom: '',
		cin: '',
		civiliteH: false,
		civiliteF: false,
		naissance: '',
		typeUser: 1,
		email: '',
		password: '',
		passwordConfirm: '',
		telephone: '',
		adresse: ''
	};

	handleOnChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value !== 'on' ? event.target.value : event.target.checked
		});
	};

	handleOnSubmit = async (event) => {
		event.preventDefault();
		console.log(this.state);
		const body = Object.assign({}, this.state);
		const response = await fetch('http://localhost:5000/users/register', {
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			method: 'POST',
			body: JSON.stringify(body)
		});
		const res = await response.json();
		if (!res.errors) {
			if (!this.props.auth.status) {
				this.props.authenticateUser(res.token, res.user, res.description);
				this.props.history.push('/');
			}
			this.props.history.push('/login');
		}
	};

	render () {
		return (
			<div className="formPatient">
				<h1>Ajout nouveau patient</h1>
				<form onSubmit={this.handleOnSubmit} method="post">
					<label>
						Nom
						<input type="text" id="nom" required onChange={this.handleOnChange} />
					</label>
					<label>
						Prénom
						<input type="text" id="prenom" required onChange={this.handleOnChange} />
					</label>
					<br />
					<label>
						CIN
						<input type="text" id="cin" required onChange={this.handleOnChange} />
					</label>
					<br />
					<label>
						Sexe: <br />
						<input
							type="radio"
							name="civilite"
							id="civiliteH"
							required
							onChange={this.handleOnChange}
						/>
						Homme
						<input
							type="radio"
							name="civilite"
							id="civiliteF"
							required
							onChange={this.handleOnChange}
						/>
						Femme
					</label>
					<br />
					<label>
						Date de naissance:
						<input type="date" id="naissance" required onChange={this.handleOnChange} />
					</label>
					<br />
					<label>
						Type d'utilisateur
						<select id="typeUser" required onChange={this.handleOnChange}>
							<option value={1}>Médecin</option>
							<option value={2}>Sécrétaire</option>
							<option value={3}>Patient</option>
						</select>
					</label>
					<br />
					<label>
						Email
						<input type="email" id="email" required onChange={this.handleOnChange} />
					</label>
					<br />
					<label>
						Mot de passe
						<input type="password" id="password" required onChange={this.handleOnChange} />
					</label>
					<br />
					<label>
						Confirmer le mot de passe
						<input type="password" id="passwordConfirm" required onChange={this.handleOnChange} />
					</label>
					<br />
					<label>
						Téléphone
						<input type="tel" id="telephone" required onChange={this.handleOnChange} />
					</label>
					<label id="labelAdresse">
						<p>Adresse:</p>
						<textarea id="adresse" onChange={this.handleOnChange} />
					</label>
					<input type="reset" value="Annuler" className="button" />
					<input type="submit" value="Soumettre" className="button" />
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

const mapDispatchToProps = (dispatch) => {
	return {
		authenticateUser: (token, user, description) =>
			dispatch(authenticateUser(token, user, description))
	};
};

export default connect(mapSateToProps, mapDispatchToProps)(FormNewUser);
