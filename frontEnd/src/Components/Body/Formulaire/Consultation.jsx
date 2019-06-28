import React, { Component } from 'react';
import FormNewUser from './FormNewUser';
import FormInfo from './FormInfo';
import './Consultation.css';
import BodyConsultation from './BodyConsultation';
import Profile from '../Profile';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Consultation extends Component {
	render () {
		if (!this.props.auth.user.niveau || this.props.auth.user.niveau > 1)
			return <Redirect to="/login" />;

		const information = (
			<div className="information">
				<h1>Information</h1>
				<div>
					<Profile uid={this.props.match.params.uidPatient} />
				</div>
			</div>
		);

		const antecedant = (
			<div className="antecedant">
				<h1>Antecedant</h1>
				<FormInfo title="Ajouter un nouvel antecedant" id="antecedant" />
			</div>
		);

		const consultation = (
			<div className="consultation">
				<h1>Consultation</h1>
				<BodyConsultation />
			</div>
		);

		const imagerie = (
			<div className="imagerie">
				<h1>Imagerie</h1>
			</div>
		);

		return (
			<div>
				<h1>Consultation du patient N° {this.props.match.params.idPatient}</h1>
				<div className="consultationComponent">
					{information}
					{antecedant}
					{imagerie}
					{consultation}
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

export default connect(mapSateToProps)(Consultation);
