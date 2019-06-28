import React, { Component } from 'react';
import './Accueil.css';
import ListeMedecin from './ListeMedecin';
import ProfileCabinet from './ProfileCabinet';

class Accueil extends Component {
	state = {
		view: 'list'
	};

	handleOnClick = (event) => {
		this.setState({
			view: event.target.name
		});
	};

	render () {
		const view =
			this.state.view === 'list' ? (
				<div>
					<h1>Liste des médecins</h1>
					<ListeMedecin />
				</div>
			) : this.state.view === 'info' ? (
				<div>
					<h1>Présentation du cabinet</h1>
					<ProfileCabinet />
				</div>
			) : (
				<h1>Promos</h1>
			);
		return (
			<div className="accueil">
				<div className="buttonPanel">
					<button name="list" onClick={this.handleOnClick}>
						Medecins du cabinet
					</button>
					<button name="info" onClick={this.handleOnClick}>
						Information du cabinet
					</button>
					<button name="promo" onClick={this.handleOnClick}>
						Promotions du cabinet
					</button>
				</div>
				{view}
			</div>
		);
	}
}

export default Accueil;
