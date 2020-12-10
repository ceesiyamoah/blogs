import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BlogPostForm = ({ initialState, onSubmit }) => {
	const [blogDetails, setBlogDetails] = useState(initialState);

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Title:</Text>
			<TextInput
				style={styles.title}
				value={blogDetails.title}
				onChangeText={(newText) =>
					setBlogDetails({ ...blogDetails, title: newText })
				}
			/>
			<Text style={styles.label}>Content:</Text>
			<TextInput
				style={styles.content}
				multiline
				value={blogDetails.content}
				maxLength={250}
				onChangeText={(newText) =>
					setBlogDetails({ ...blogDetails, content: newText })
				}
			/>

			<Button title='submit' onPress={() => onSubmit(blogDetails)} />
		</View>
	);
};

BlogPostForm.DefaultProps = {
	initialState: { title: '', content: '' },
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
	label: {
		fontSize: 24,
	},
});

export default BlogPostForm;
