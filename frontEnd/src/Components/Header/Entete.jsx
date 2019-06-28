import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Entete.css';
import UserStatus from './UserStatus';
class Entete extends Component {
	render () {
		const messageCount = 10;
		return (
			<div className="entete">
				<div>
					<Link to="/">
						<h4>QuickHealth</h4>
					</Link>
				</div>
				<div className="searchBar">
					<input
						type="text"
						name="barRecherche"
						id="barRecherche"
						className="inputText"
						placeholder="Recherche"
					/>
					<button className="searchButton">
						<img src={require('../../Public/Icons/SearchIcon.svg')} alt="Accueil" />
					</button>
				</div>
				<div>
					<div className="messageButton">
						<img src={require('../../Public/Icons/MessageIcon.svg')} alt="Accueil" />
						<span>Messages</span>
						<div>{messageCount}</div>
					</div>
				</div>
				<div>
					<div className="iconUserStatus">
						<UserStatus />
					</div>
				</div>
			</div>
		);
	}
}

export default Entete;
