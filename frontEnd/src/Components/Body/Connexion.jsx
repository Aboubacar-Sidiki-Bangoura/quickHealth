import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticateUser } from '../../store/actions/authActions';
import './Connexion.css';

class Connexion extends Component {
	state = {
		email: null,
		password: null,
		saveSession: false
	};

	handleOnChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value !== 'on' ? event.target.value : event.target.checked
		});
	};

	handleOnSubmit = async (event) => {
		event.preventDefault();
		const body = Object.assign({}, this.state);
		const response = await fetch('http://localhost:5000/users/login', {
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			method: 'POST',
			body: JSON.stringify(body)
		});
		const res = await response.json();
		if (!res.errors) {
			this.props.authenticateUser(res.token, res.user, res.description);
			this.props.history.push('/12345');
		}
	};

	render () {
		return (
			<div className="connexion">
				<form action="" method="post" className="form">
					<h1>Se connecter à QuickHealth</h1>
					<br />
					<label>
						Login: <br />
						<input
							type="email"
							id="email"
							className="textbox"
							placeholder="Email..."
							required
							onChange={this.handleOnChange}
						/>
					</label>
					<br />
					<label>
						Mot de passe: <br />
						<input
							type="password"
							id="password"
							className="textbox"
							placeholder="Mot de passe"
							required
							onChange={this.handleOnChange}
						/>
					</label>
					<br />
					<label>
						<input type="checkbox" id="saveSession" onChange={this.handleOnChange} />
						Se souvenir de moi
					</label>
					<br />
					<button type="submit" className="btn" onClick={this.handleOnSubmit}>
						Se connecter
					</button>
					<br />
					<Link to="/register">Créer un nouveau compte</Link>
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

export default connect(mapSateToProps, mapDispatchToProps)(Connexion);
