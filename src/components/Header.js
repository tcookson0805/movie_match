import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
	const { containerStyle, textStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={textStyle}>Movie Match</Text>
		</View>
	)
}

const styles = {
	containerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 30,
		paddingBottom: 20,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.2
	},
	textStyle: {
		color: 'blue',
		fontSize: 20
	}
}

export default Header;
