import React, { useContext } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
	const { editBlogPost, state } = useContext(Context);
	const blog = state.find((item) => item.id === navigation.getParam('id'));

	return (
		<BlogPostForm
			onSubmit={(blog) => editBlogPost(blog, () => navigation.goBack())}
			initialState={blog}
		/>
	);
};

export default CreateScreen;
