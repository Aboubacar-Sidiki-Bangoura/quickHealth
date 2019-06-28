import React from 'react';
import moment from 'moment';
import './Daily.css';

function Daily () {
	const { journee } = this.props;
	return (
		<div className="daily">
			<h2>Rendez-vous de la journée</h2>
			<table>
				<thead>
					<tr>
						<th>Heure</th>
						<th>Disponibilité</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>8h</td>
						<td>{journee.map((rendezvous) => {})}</td>
					</tr>
					<tr>
						<td>9h</td>
						<td>Renedez-vous de cette période</td>
					</tr>
					<tr>
						<td>10h</td>
						<td>Renedez-vous de cette période</td>
					</tr>
					<tr>
						<td>11h</td>
						<td>Renedez-vous de cette période</td>
					</tr>
					<tr>
						<td>12h</td>
						<td>Renedez-vous de cette période</td>
					</tr>
					<tr>
						<td>13h</td>
						<td>Renedez-vous de cette période</td>
					</tr>
					<tr>
						<td>14h</td>
						<td>Pause</td>
					</tr>
					<tr>
						<td>15h</td>
						<td>Renedez-vous de cette période</td>
					</tr>
					<tr>
						<td>16h</td>
						<td>Renedez-vous de cette période</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Daily;
