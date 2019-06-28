import React from 'react';

function ListeRendezVous (props) {
	const { rendezvous } = props;
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>uidPatient</th>
						<th>uidMedecin</th>
						<th>Date</th>
						<th>Heure</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					{rendezvous.map((element) => {
						return (
							<tr key={element.id}>
								<td>{element.id}</td>
								<td>{element.uidPatient}</td>
								<td>{element.uidMedecin}</td>
								<td>{element.date}</td>
								<td>{element.type}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default ListeRendezVous;
