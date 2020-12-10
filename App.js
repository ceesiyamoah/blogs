import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/BlogContext';
import HomeScreen from './src/screens/HomeScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigation = createStackNavigator(
	{
		Home: HomeScreen,
		Show: ShowScreen,
		Create: CreateScreen,
		Edit: EditScreen,
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
