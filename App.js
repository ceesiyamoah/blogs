import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import { BlogProvider } from './src/context/BlogContext';

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
	<BlogProvider>
		<App />
	</BlogProvider>
);
