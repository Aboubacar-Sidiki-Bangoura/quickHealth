import React from 'react';
import './Weekly.css';

function Weekly () {
	return (
		<div className="weekly">
			<h2>Rendez-vous de la semaine</h2>
			<table>
				<thead>
					<tr>
						<th>Période</th>
						<th>Lundi</th>
						<th>Mardi</th>
						<th>Mercredi</th>
						<th>Jeudi</th>
						<th>Vendredi</th>
						<th>Samedi</th>
						<th>Dimanche</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Matiné</td>
						<td>Rendez-Vous</td>
					</tr>
					<tr>
						<td>Soirée</td>
						<td>Rendez-Vous</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Weekly;
