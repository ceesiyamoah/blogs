import createDataContext from './createDataContext';

const blogReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_BLOG_POST':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 99999),
					title: `Blog ${state.length + 1}`,
				},
			];
		case 'DELETE_BLOG_POST':
			return state.filter((item) => item.id !== payload);
		default:
			return state;
	}
};

const addBlogPost = (dispatch) => () => {
	dispatch({ type: 'ADD_BLOG_POST' });
};
const deleteBlogPost = (dispatch) => (id) => {
	dispatch({ type: 'DELETE_BLOG_POST', payload: id });
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost },
	[]
);
