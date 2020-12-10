import React, { useContext } from 'react';
import { Button, Text } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context);
	const blog = state.find((item) => item.id === navigation.getParam('id'));
	return (
		<>
			<Text>{blog.title}</Text>
		</>
	);
};

export default ShowScreen;
