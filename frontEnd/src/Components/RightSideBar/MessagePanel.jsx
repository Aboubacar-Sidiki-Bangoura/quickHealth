import React, { Component } from 'react';
import './MessagePanel.css';

class MessagePanel extends Component {
	render () {
		return (
			<div className="messagePanel">
				<div className="mHeader">
					<img src={require('../../Public/Icons/MessageIcon.svg')} alt="Message accueil" />
					<h1>Message</h1>
				</div>
				<div className="mBody" />
				<div className="mFooter">
					<input type="text" name="message" placeholder="Votre message..." />
				</div>
			</div>
		);
	}
}

export default MessagePanel;
