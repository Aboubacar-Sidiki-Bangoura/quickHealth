import React, { Component } from 'react';
import './FormInfo.css';

class FormInfo extends Component {
	state = {
		type: '',
		remarque: ''
	};

	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render () {
		const title = this.props.title;

		return (
			<div className="formInfo">
				<h1>{title}</h1>
				<div>
					<form name={this.props.id} id="myFormInfo" method="post" onSubmit={null}>
						<div className="formInfoBody">
							<div>
								Type:
								<input
									type="text"
									name="type"
									required
									onChange={this.handleOnChange}
									value={this.state.typeValue}
								/>
								<br />
								Remarque:
								<input
									type="text"
									name="remarque"
									required
									onChange={this.handleOnChange}
									value={this.state.typeRemarque}
								/>
							</div>
							<div>
								<input type="reset" value="Vider" />
								<input className="submit" type="submit" value="Ajouter" />
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default FormInfo;
