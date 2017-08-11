import React from 'react';
import { View } from 'react-native';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

const App = () => {
	return (
		<View>
			<Header />
			<LoginForm />
		</View>
	);
};

export default App;
