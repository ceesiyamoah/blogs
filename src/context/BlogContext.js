import React, { createContext, useReducer, useState } from 'react';

const BlogContext = createContext();

//!Move to separate function
const blogReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_BLOG_POST':
			return { ...state, ...payload };

		default:
			return state;
	}
};

export const BlogProvider = ({ children }) => {
	const [blogPosts, dispatch] = useReducer(blogReducer, []);

	return (
		<BlogContext.Provider value={{ blogPosts, addBlogPost }}>
			{children}
		</BlogContext.Provider>
	);
};
export default BlogContext;
