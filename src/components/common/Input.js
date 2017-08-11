import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, placeholder, onChangeText }) => {
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.labelStyle}>
				{label}
			</Text>
			<TextInput 
				style={styles.inputStyle} 
				placeholder={placeholder} 
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = {
	containerStyle: {
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1
	},
	labelStyle: {
		flex: 1,
		fontSize: 18,
		paddingLeft: 20
	},
	inputStyle: {
		fontSize: 18,
		lineHeight: 23,
		flex: 3,
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
	}
};

export { Input };
