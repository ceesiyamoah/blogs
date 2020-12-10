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
		default:
			return state;
	}
};

const addBlogPost = (dispatch) => (blogDetails) => {
	dispatch({ type: 'ADD_BLOG_POST', payload: blogDetails });
};
const deleteBlogPost = (dispatch) => (id) => {
	dispatch({ type: 'DELETE_BLOG_POST', payload: id });
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost },
	[]
);
