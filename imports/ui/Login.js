import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: ''
		};
	}

	onSubmit(e) {
		e.preventDefault();

		let email = this.refs.email.value.trim();
		let password = this.refs.password.value.trim();

		Meteor.loginWithPassword({ email }, password, (err) => {
			console.log('Login callback', err);
		});
	}

	render() {
		return (
			<div>
				<h1>Short Link</h1>

				{this.state.error ? <p>{this.state.error}</p> : undefined}

				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="email" ref="email" name="email" placeholder="Email" />
					<input type="password" ref="password" name="password" placeholder="Password" />
					<button>Login</button>
				</form>

				<Link to="/signup">Create an account here</Link>
			</div>
		);
	}
}

export default Login;
