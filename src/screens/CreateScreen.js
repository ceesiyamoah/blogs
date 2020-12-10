import React, { useContext } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
	const { addBlogPost } = useContext(Context);

	return (
		<BlogPostForm
			onSubmit={(blog) => addBlogPost(blog, () => navigation.goBack())}
		/>
	);
};

export default CreateScreen;
