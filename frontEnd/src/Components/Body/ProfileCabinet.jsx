import React, { Component } from 'react';

import './ProfileCabinet.css';
const avatar = require('../../Public/Icons/account.svg');

export default class ProfileCabinet extends Component {
	state = {
		cabinet: null
	};

	componentDidMount () {
		fetch('http://localhost:5000/profiles/cabinet', {
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			method: 'GET'
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.errors) return;
				this.setState({ cabinet: res.cabinet });
			})
			.catch((error) => console.log(error));
	}

	render () {
		const cabinet = this.state.cabinet;
		return cabinet == null ? (
			<h1>Chargemant</h1>
		) : (
			<div className="cabinet">
				<div>
					<div className="background">
						<div className="profileCabinet">
							<img src={avatar} alt="Avatar cabinet" />
						</div>
					</div>
				</div>
				<div className="infoCabinet">
					<h1>Présentation du cabinet médicale</h1>
					<p>
						<span>Code Postal: </span> {cabinet.code}
						<span>Vile: </span> {cabinet.ville}
					</p>
					<p>
						<span>Pays: </span> {cabinet.pays}
					</p>
					<p>
						<span>Adresse: </span> {cabinet.adresse}
					</p>
					<p>
						<span>Téléphone: </span> {cabinet.telephone}
					</p>
					<p>
						<span>Email: </span> {cabinet.email}
					</p>
					<p>
						<span>Site : </span> 😅😅😅😅Eh bien... 🤔Bah vous êtes la dessus
					</p>
					<p>
						<span>Description: </span> {cabinet.description}
					</p>
				</div>
			</div>
		);
	}
}
