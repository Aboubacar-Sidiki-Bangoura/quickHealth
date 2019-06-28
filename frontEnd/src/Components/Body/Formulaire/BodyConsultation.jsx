import React, { Component } from 'react';
import './BodyConsultation.css';
import FormInfo from './FormInfo';
import FormOrdonnance from './FormOrdonnance';

class BodyConsultation extends Component {
	constructor (props) {
		super();

		this.state = { component: this.interrogatoir };
	}
	interrogatoir = (
		<div>
			<FormInfo title="Ajouter nouvelles remarques" id="bodyConsultationFormInfo" />
		</div>
	);

	componentHandler = (event) => {
		const ordonnance = (
			<div>
				<FormOrdonnance />
			</div>
		);
		this.setState({ component: ordonnance });
	};

	componentHandler2 = (event) => {
		const examen = (
			<div>
				<FormInfo title="Ajouter nouvelles examens" />
			</div>
		);

		this.setState({ component: examen });
	};

	componentHandler3 = (event) => {
		const interrogatoir = (
			<div>
				<FormInfo title="Remarques" />
			</div>
		);
		this.setState({ component: interrogatoir });
	};

	render () {
		return (
			<div className="bodyConsult">
				<button onClick={this.componentHandler3}>Remarques</button>
				<button onClick={this.componentHandler2}>Exemens</button>
				<button onClick={this.componentHandler}>Ordonnance</button>
				{this.state.component}
			</div>
		);
	}
}

export default BodyConsultation;
