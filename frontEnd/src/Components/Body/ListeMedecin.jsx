import React, { Component } from 'react';
import { Profile } from './Profile';
import './ListeMedecin.css';
export class ListeMedecin extends Component {
	state = {
		medecins: null
	};

	componentDidMount () {
		const token = this.props.auth !== undefined ? this.props.auth.token : ' ';
		fetch('http://localhost:5000/profiles/medecins', {
			headers: new Headers({
				'Content-Type': 'application/json',
				'auth-token': token
			}),
			method: 'GET'
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.errors) return;
				this.setState({ medecins: res.medecins });
			})
			.catch((error) => console.log(error));
	}

	render () {
		return this.state.medecins === null ? (
			<div>Chargement...</div>
		) : (
			<div className="listeMedecins">
				{this.state.medecins.map((medecin) => <Profile uid={medecin.uid} key={medecin.id} />)}
			</div>
		);
	}
}

export default ListeMedecin;
