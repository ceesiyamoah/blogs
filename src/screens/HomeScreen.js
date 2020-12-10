import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
	const { state, addBlogPost, deleteBlogPost } = useContext(Context);
	return (
		<>
			<View style={{ alignItems: 'center' }}>
				<Button
					title='add post'
					onPress={() => navigation.navigate('Create')}
				/>
			</View>
			<FlatList
				data={state}
				keyExtractor={({ id }) => `${id}`}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('Show', { id: item.id })}
					>
						<View style={styles.container}>
							<Text style={styles.text}>
								{item.title}- {item.id}
							</Text>
							<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
								<AntDesign name='delete' style={styles.icon} color='black' />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
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

export default HomeScreen;
