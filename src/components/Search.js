import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Search = () => {

	const { containerStyle, inputStyle } = styles;

	return (
		<View styoe={containerStyle}>
			<Text>Search</Text>
			<TextInput style={inputStyle} />
			<TextInput style={inputStyle} />
		</View>
	)
}

const styles = {
	searchContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	inputStyle: {
		padding: 5,
	}
}

export default Search;
