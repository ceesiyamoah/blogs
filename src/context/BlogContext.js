import createDataContext from './createDataContext';

const blogReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_BLOG_POST':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 99999),
					title: payload.title,
					content: payload.content,
				},
			];
		case 'DELETE_BLOG_POST':
			return state.filter(({ id }) => id !== payload);

		case 'EDIT_BLOG_POST':
			let newBlog = state.find((item) => item.id === payload.id);
			(newBlog.title = payload.title), (newBlog.content = payload.content);

			return [state.filter((item) => item.id !== payload.id), newBlog];
		default:
			return state;
	}
};

const addBlogPost = (dispatch) => (blogDetails, callback) => {
	dispatch({ type: 'ADD_BLOG_POST', payload: blogDetails });
	callback();
};
const deleteBlogPost = (dispatch) => (id) => {
	dispatch({ type: 'DELETE_BLOG_POST', payload: id });
};
const editBlogPost = (dispatch) => (blog, callback) => {
	dispatch({ type: 'EDIT_BLOG_POST', payload: blog });
	callback();
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost, editBlogPost },
	[{ id: 1, title: 'Test', content: 'turdfsdfasdfa' }]
);
