import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Daily from '../Agenda/Daily';
import Weekly from '../Agenda/Weekly';
import Monthly from '../Agenda/Monthly';
import ListeRendezVous from '../ListeRendezVous';

import './Agenda.css';

class Agenda extends Component {
	state = {
		rendezvous: null,
		mode: 'Daily',
		dailyRendezVous: {},
		monthlyRendezVous: {},
		medecinChosed: ''
	};

	handleOnClick = (event) => {
		this.setState({
			mode: event.target.name
		});
	};
	componentDidMount () {
		fetch('http://localhost:5000/rendezvous/rendezvous')
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				this.setState({
					rendezvous: res.rendezvous
				});
			})
			.catch((error) => {
				alert(error);
			});
	}

	render () {
		if (!this.props.auth.status) return <Redirect to="/login" />;
		const agenda =
			this.state.mode === 'Daily' ? (
				<ListeRendezVous rendezvous={this.state.rendezvous} />
			) : this.state.mode === 'Weekly' ? (
				<ListeRendezVous rendezvous={this.state.rendezvous} />
			) : (
				<ListeRendezVous rendezvous={this.state.rendezvous} />
			);
		return this.state.rendezvous == null ? (
			<h1>Chargement</h1>
		) : (
			<div className="agenda">
				<h1>Agenda</h1>
				<div id="clock">Clock</div>
				<Link to="/rendezvous">
					<h3>Prendre un rendez-vous</h3>
				</Link>
				<input type="button" name="Daily" value="Journée" onClick={this.handleOnClick} />
				<input type="button" name="Weekly" value="Semmaine" onClick={this.handleOnClick} />
				<input type="button" name="Monthly" value="Mois" onClick={this.handleOnClick} />
				{agenda}
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

export default connect(mapSateToProps)(Agenda);
