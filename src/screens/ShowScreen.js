import React, { useContext } from 'react';
import { Button, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context);
	const blog = state.find((item) => item.id === navigation.getParam('id'));
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{blog.title}</Text>
			<Text style={styles.content}>{blog.content}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		padding: 10,
		textAlign: 'center',
	},
	content: {
		fontSize: 18,
	},
});

ShowScreen.navigationOptions = ({ navigation }) => ({
	headerRight: () => (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate('Edit', { id: navigation.getParam('id') })
			}
		>
			<MaterialIcons name='edit' size={24} color='black' />
		</TouchableOpacity>
	),
});

export default ShowScreen;
