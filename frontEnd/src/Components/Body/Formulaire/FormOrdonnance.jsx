import React, { Component } from 'react';
import './FormOrdonnance.css';

class FormOrdonnance extends Component {
	render () {
		return (
			<div className="ordonnance">
				<form action="">
					<h1>Ordonnance</h1>
					<label>
						Nom du médicament
						<input type="text" name="medicament" placeholder="Médicament" />
						<br />
					</label>
					<br />
					<div>
						<label>
							Période de traitement
							<input type="text" name="Periode" />
						</label>
						<br />
						<label>
							Posologie
							<input type="text" name="Posologie" />
						</label>
						<br />
						<label>
							Matin
							<input type="checkbox" name="matin" />
							Midi
							<input type="checkbox" name="midi" />
							Soir
							<input type="checkbox" name="soir" />
						</label>
						<br />
						<label>
							Recommandations
							<input type="text" name="Recommandation" />
						</label>
						<button type="reset">Supprimer</button>
						<button onClick="" className="enregistrer">
							Ajouter
						</button>
					</div>
					<br />
					<button type="reset">Annuler</button>
					<button type="submit" className="enregistrer">
						Enregistrer
					</button>
				</form>
			</div>
		);
	}
}

export default FormOrdonnance;
