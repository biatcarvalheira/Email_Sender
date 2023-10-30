import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
		case null:
			return 'Still deciding'
		case false:
			return 'Not Logged in'
		default:
			return 'Logged In'

		}
	}



	render() {
		return (
			<nav>
				<div className = "nav-wrapper">
					<a className = "left brand-logo">
					Email Sender App	
					</a>
					<ul className = "right">
						{this.renderContent()}
					</ul>

				</div>

			</nav>

		);
	}

}

function mapStateToProps({ auth }) {
	return { auth: auth };
}

export default connect(mapStateToProps) (Header);