import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {


	render() {
		return (
			<View>
				<Text> Login </Text>
				<Card>
					<CardSection>
						<Input 
							label='Email'
						/>
					</CardSection>
					<CardSection>
						<Input 
							label='Password'
						/>
					</CardSection>
					<CardSection>
						<Button>Login</Button>
					</CardSection>
				</Card>
			</View>
		);
	}
}

export default LoginForm;
