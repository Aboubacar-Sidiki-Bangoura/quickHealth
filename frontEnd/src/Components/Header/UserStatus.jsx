import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './UserStatus.css';
import { disconnectUser } from '../../store/actions/authActions';

class UserStatus extends Component {
	handleOnClick = (event) => {
		this.props.disconnectUser();
	};

	render () {
		const { auth } = this.props;
		return (
			<div className="userStatus">
				{auth.status === false ? (
					<div>
						<ul>
							<li>
								<Link to="/register">S'enregistrer</Link>
							</li>
							<li>
								<Link to="/login">Se connecter</Link>
							</li>
						</ul>
					</div>
				) : (
					<div>
						<ul>
							<li id="userAvatar">
								{auth.description.nom[0].toUpperCase()}
								{auth.description.prenom[0].toUpperCase()}
							</li>
							<li>
								<Link to={`/profile/${this.props.auth.user.uid}`}>Profile</Link>
							</li>
							<li onClick={this.handleOnClick}>
								<Link to="/login">Se deconnecter</Link>
							</li>
						</ul>
					</div>
				)}
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

const mapDispatchToProps = (dispatch) => {
	return {
		disconnectUser: () => dispatch(disconnectUser())
	};
};

export default connect(mapSateToProps, mapDispatchToProps)(UserStatus);
