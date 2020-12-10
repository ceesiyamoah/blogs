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
			return state.map((item) => (item.id === payload.id ? payload : item));
		default:
			return state;
	}
};

const addBlogPost = (dispatch) => (blogDetails, callback) => {
	dispatch({ type: 'ADD_BLOG_POST', payload: blogDetails });
	callback && callback();
};
const deleteBlogPost = (dispatch) => (id) => {
	dispatch({ type: 'DELETE_BLOG_POST', payload: id });
};
const editBlogPost = (dispatch) => (blog, callback) => {
	dispatch({ type: 'EDIT_BLOG_POST', payload: blog });
	callback && callback();
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost, editBlogPost },
	[{ id: 1, title: 'Test', content: 'turdfsdfasdfa' }]
);
