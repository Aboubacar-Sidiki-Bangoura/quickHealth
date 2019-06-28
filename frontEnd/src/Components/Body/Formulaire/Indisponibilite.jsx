import React, { Component } from 'react';
import FormInfo from './FormInfo';
import './FormNewUser.css';
import './Indisponibilite.css';

export default class Indisponibilite extends Component {
	state = {
		indisponibilite: null,
		uid: '',
		dateDebut: '',
		dateFin: '',
		tempsDebut: '',
		tempsFin: '',
		motif: ''
	};

	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleOnSubmit = async (event) => {
		event.preventDefault();

		const body = Object.assign({}, this.state);
		delete body.indisponibilite;
		const token = this.props.auth !== undefined ? this.props.auth.token : ' ';
		let response = await fetch('http://localhost:5000/rendezvous/indisponibilite', {
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
		this.setState({ indisponibilite: response.indisponibilite });
	};

	render () {
		const { indisponibilites } = this.state;
		return (
			<div className="indisponibilite">
				{/* <div className="listIndispo">
					{indisponibilites && indisponibilites.map((indisponibilite) => {})}
				</div> */}
				<div className="formIndispo">
					<h1>Ajouter une nouvelle indisponibilite</h1>
					<form onSubmit={this.handleOnSubmit} name="formIndisponibilite">
						<label>
							UID du médecin:
							<input type="text" name="uid" onChange={this.handleOnChange} />
						</label>
						<br />
						<label>
							Date de début:
							<input type="date" name="dateDebut" onChange={this.handleOnChange} />
						</label>
						<label>
							Temps de début:
							<input type="time" name="tempsDebut" onChange={this.handleOnChange} />
						</label>
						<br />
						<label>
							Date de fin:
							<input type="date" name="dateFin" onChange={this.handleOnChange} />
						</label>
						<label>
							Temps de fin:
							<input type="time" name="tempsFin" onChange={this.handleOnChange} />
						</label>
						<br />
						<label>
							Motif:
							<input type="text" name="motif" onChange={this.handleOnChange} />
						</label>
						<br />
						<input type="reset" value="Vider" />
						<input type="submit" value="Valider" />
					</form>
				</div>
			</div>
		);
	}
}
