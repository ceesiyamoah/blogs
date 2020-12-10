import React, { useContext, useState } from 'react';
import { Text, StyleSheet, TextInput, View, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const initialState = { title: '', content: '' };

const CreateScreen = ({ navigation }) => {
	const { addBlogPost } = useContext(Context);
	const [blogDetails, setBlogDetails] = useState(initialState);

	//TODO validate user input
	const handleSubmit = () => {
		setBlogDetails(initialState);
		addBlogPost(blogDetails);
		navigation.navigate('Home');
	};
	return (
		<View style={styles.container}>
			<Text>Title:</Text>
			<TextInput
				style={styles.title}
				value={blogDetails.title}
				onChangeText={(newText) =>
					setBlogDetails({ ...blogDetails, title: newText })
				}
			/>
			<Text>Content:</Text>
			<TextInput
				style={styles.content}
				multiline
				value={blogDetails.content}
				maxLength={250}
				onChangeText={(newText) =>
					setBlogDetails({ ...blogDetails, content: newText })
				}
			/>

			<Button title='submit' onPress={handleSubmit} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		margin: 10,
	},
	title: {
		padding: 5,
		borderWidth: 1,
		borderColor: 'grey',
		borderRadius: 5,
		fontSize: 18,
	},
	content: {
		padding: 5,
		borderWidth: 1,
		borderColor: 'grey',
		borderRadius: 5,
		fontSize: 18,
		marginBottom: 10,
	},
});

export default CreateScreen;
