import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Profile.css';
const avatar = require('../../Public/Icons/account.svg');
const plus = require('../../Public/Icons/plus.svg');

export class Profile extends Component {
	state = {
		uid: null,
		user: null,
		description: null
	};

	componentDidMount () {
		const uid = this.props.uid ? this.props.uid : this.props.match.params.uid;
		const token = this.props.auth !== undefined ? this.props.auth.token : ' ';
		fetch('http://localhost:5000/profiles/profile', {
			headers: new Headers({
				'Content-Type': 'application/json',
				'auth-token': token
			}),
			method: 'POST',
			body: JSON.stringify({ uid })
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.errors) return;
				this.setState({ id: res.user.uid, user: res.user, description: res.description });
			})
			.catch((error) => console.log(error));
	}

	render () {
		const { user, description } = this.state;
		return this.state.id == null ? (
			<div>Chargement</div>
		) : (
			<div className="profile">
				<div>
					<div>
						<img id="image" src={avatar} alt="User avatar" />
					</div>
				</div>
				<div>
					<div className="rendezVousPlus">
						<Link to={`/rendezvous/${user.uid}`}>
							<img src={plus} alt="Plus" />
							<span>Rendez-vous</span>
						</Link>
					</div>
					<p>
						<span>Id: </span> {user.uid}
					</p>
					<p>
						<span>Email: </span> {description.email}
					</p>
					<p>
						<span>Nom: </span> {description.nom}
					</p>
					<p>
						<span>Prénom: </span> {description.prenom}
					</p>
					<p>
						<span>Sexe: </span> {description.sexe}
					</p>
					<p>
						<span>CIN: </span> {description.cin}
					</p>
					<p>
						<span>Date de naissance: </span> {description.naissance}
					</p>
					<p>
						<span>Téléphone: </span> {description.telephone}
					</p>
					<p>
						<span>Adresse: </span> {description.adresse}
					</p>
				</div>
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

export default connect(mapSateToProps)(Profile);
