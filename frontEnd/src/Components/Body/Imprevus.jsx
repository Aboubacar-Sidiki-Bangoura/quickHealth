import React, { Component } from 'react';
import './Imprevus.css';

class Imprevus extends Component {
	state = {
		id: '',
		uidMedecin: '',
		dateDebut: '',
		tempsDebut: '',
		dateFin: '',
		tempsFin: '',
		motif: ''
	};

	handleOnchange = (event) => {
		this.setState({
			[event.target.name]: event.target.value !== 'on' ? event.target.value : event.target.checked
		});
	};

	handleOnsubmit = async (event) => {
		event.preventDefault();
		console.log(this.state);
		const body = Object.assign({}, this.state);
		const response = await fetch('http://localhost:5000/imprevu/imprevuAjout', {
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			method: 'POST',
			body: JSON.stringify(body)
		});
		const res = await response.json();
		console.log(res);
		return;
		//if (!res.errors) this.props.history.push('/accueil');
	};

	render () {
		return (
			<div className="imprevu">
				<h1>Ajouter un Imprevu</h1>
				<form className="myform" onSubmit={this.handleOnsubmit} method="post">
					<label>
						Id:
						<input
							type="text"
							name="id"
							className="ident"
							required
							onChange={this.handleOnchange}
						/>
						<br />
					</label>
					<label>
						UID Medecin:
						<input
							type="text"
							name="uidMedecin"
							className="uid"
							required
							onChange={this.handleOnchange}
						/>
						<br />
					</label>
					<label>
						Date Debut:
						<input
							type="date"
							name="dateDebut"
							className="date"
							required
							onChange={this.handleOnchange}
						/>
						<br />
					</label>
					<label>
						Temps Debut:
						<input
							type="time"
							name="tempsDebut"
							className="tempsdeb"
							onChange={this.handleOnchange}
						/>
						<br />
					</label>
					<label>
						Date Fin:
						<input
							type="date"
							name="dateFin"
							className="datefin"
							required
							onChange={this.handleOnchange}
						/>
					</label>
					<label>
						Temps Fin:
						<input
							type="time"
							name="tempsFin"
							className="tempsfin"
							required
							onChange={this.handleOnchange}
						/>
					</label>
					<br />
					<label>
						Motif:
						<input type="text" name="motif" className="motif" onChange={this.handleOnchange} />
					</label>
					<br />
					<input type="reset" value="Vider" />
					<input type="submit" value="Valider" />
				</form>
			</div>
		);
	}
}

export default Imprevus;
