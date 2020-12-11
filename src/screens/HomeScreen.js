import React, { useContext, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
	const { state, deleteBlogPost, getBlogPosts } = useContext(Context);
	useEffect(() => {
		getBlogPosts();
		const listener = navigation.addListener('didFocus', () => {
			getBlogPosts();
		});

		return () => {
			listener.remove();
		};
	}, []);

	return (
		<>
			<FlatList
				data={state}
				keyExtractor={({ id }) => `${id}`}
				renderItem={({ item }) => (
					<View style={styles.container}>
						<TouchableOpacity
							onPress={() => navigation.navigate('Show', { id: item.id })}
						>
							<Text style={styles.text}>
								{item.title}- {item.id}
							</Text>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
							<AntDesign name='delete' style={styles.icon} color='black' />
						</TouchableOpacity>
					</View>
				)}
			/>
		</>
	);
};
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderColor: 'grey',
		paddingHorizontal: 10,
		justifyContent: 'space-between',
	},
	text: {
		fontSize: 24,
	},
	icon: {
		fontSize: 24,
	},
});

HomeScreen.navigationOptions = ({ navigation }) => ({
	headerRight: () => (
		<TouchableOpacity onPress={() => navigation.navigate('Create')}>
			<AntDesign name='plus' color='black' size={24} />
		</TouchableOpacity>
	),
});

export default HomeScreen;
