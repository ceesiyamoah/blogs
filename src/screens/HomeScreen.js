import React, { useContext } from 'react';
import { Button, FlatList, Text } from 'react-native';
import BlogContext from '../context/BlogContext';

const HomeScreen = () => {
	const { blogPosts, addBlogPost } = useContext(BlogContext);
	return (
		<>
			<Button title='add post' onPress={addBlogPost} />
			<FlatList
				data={blogPosts}
				keyExtractor={({ title }) => title}
				renderItem={({ item }) => <Text>{item.title}</Text>}
			/>
		</>
	);
};

export default HomeScreen;
