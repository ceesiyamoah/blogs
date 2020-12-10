import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/BlogContext';
import HomeScreen from './src/screens/HomeScreen';

const navigation = createStackNavigator(
	{
		Home: HomeScreen,
	},
	{
		defaultNavigationOptions: {
			title: 'Blog List',
		},
		initialRouteName: 'Home',
	}
);

const App = createAppContainer(navigation);

export default () => (
	<Provider>
		<App />
	</Provider>
);
