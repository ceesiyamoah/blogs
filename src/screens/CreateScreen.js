import React, { useContext } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const initialState = { title: '', content: '' };

const CreateScreen = ({ navigation }) => {
	const { addBlogPost } = useContext(Context);

	return (
		<BlogPostForm
			initialState={initialState}
			actionOnPost={addBlogPost}
			navigation={navigation}
		/>
	);
};

export default CreateScreen;
