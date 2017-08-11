import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';

import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		console.log('button pressed');
	}

	render() {
		return (
			<View>
				<Text> Login </Text>
				<Card>
					<CardSection>
						<Input 
							label='Email'
							placeholder='you@email.com'
							onChangeText={this.onEmailChange.bind(this)}
						/>
					</CardSection>
					<CardSection>
						<Input 
							label='Password'
							placeholder='abc123'
							onChangeText={this.onPasswordChange.bind(this)}
						/>
					</CardSection>
					<CardSection>
						<Button onPress={this.onButtonPress.bind(this)}>Login</Button>
					</CardSection>
				</Card>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
