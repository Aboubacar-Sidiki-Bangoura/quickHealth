import React from 'react';
import { BrowserRouter, Route, NavLink, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './ImprevuList.css';

class ImprevuList extends React.Component {
	constructor () {
		super();
		this.state = {
			Imprevus: []
		};
	}

	componentDidMount () {
		fetch('http://localhost:5000/imprevu/imprevuList')
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				this.setState({
					Imprevus: res
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	delete = (id) => {
		let result = 'Etes vous sure?';
		// let id = window.prompt('_id: ');
		if (window.confirm(result)) {
			fetch('http://localhost:5000/imprevu/imprevuDelete/' + id, {
				method: 'DELETE'
			})
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
					let imprevus = this.state.Imprevus.filter((imp) => {
						return imp._id !== id;
					});
					this.setState((state) => {
						state.Imprevus = imprevus;
						return state;
					});
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	render () {
		const { auth } = this.props;
		const test = auth.status == true && auth.user.niveau <= 2;
		return (
			<div className="imprevus">
				<h2 className="titre">Liste de tous les Imprevus</h2>

				<table border="1">
					<tr>
						<th>Id</th>
						<th>UID Medecin</th>
						<th>Date Debut</th>
						<th>Temps Debut</th>
						<th>Date Fin</th>
						<th>Temps Fin</th>
						<th>Raison de l'absence</th>
						{test && <th>Actions</th>}
					</tr>
					{this.state.Imprevus.map((Imprevus, index) => {
						return (
							<tr key={Imprevus._id}>
								<td>{Imprevus.id}</td>
								<td>{Imprevus.uidMedecin}</td>
								<td>{Imprevus.dateDebut}</td>
								<td>{Imprevus.tempsDebut}</td>
								<td>{Imprevus.dateFin}</td>
								<td>{Imprevus.tempsDebut}</td>
								<td>{Imprevus.motif}</td>
								{test && (
									<td>
										<input type="button" value="Delete" onClick={() => this.delete(Imprevus._id)} />
									</td>
								)}
							</tr>
						);
					})}
				</table>
				{test && (
					<Link to="/ajouterrendezvous">
						<div className="ajout">
							<img
								src={require('../..//Public/Icons/add.svg')}
								alt="Icon agenda"
								height="5%"
								width="5%"
							/>
						</div>
					</Link>
				)}
				<div className="ajout" />
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

export default connect(mapSateToProps)(ImprevuList);
