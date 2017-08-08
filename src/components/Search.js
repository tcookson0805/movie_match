import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Search = () => {

	const { searchContainer, inputStyles } = styles;

	return (
		<View>
			<Text>Search</Text>
			<TextInput />
			<TextInput />
		</View>
	)
}

const styles = {
	searchContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	inputStyle: {

	}
}

export default Search;
