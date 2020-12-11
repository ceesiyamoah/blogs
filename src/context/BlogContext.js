import jsonServer from '../api/jsonServer';
import createDataContext from './createDataContext';

const blogReducer = (state, { type, payload }) => {
	switch (type) {
		case 'GET_BLOG_POSTS':
			return payload;

		case 'DELETE_BLOG_POST':
			return state.filter(({ id }) => id !== payload);

		case 'EDIT_BLOG_POST':
			return state.map((item) => (item.id === payload.id ? payload : item));
		default:
			return state;
	}
};

const getBlogPosts = (dispatch) => async () => {
	const { data } = await jsonServer.get('/blogPosts');
	dispatch({ type: 'GET_BLOG_POSTS', payload: data });
};

const addBlogPost = () => async (blog, callback) => {
	await jsonServer.post('/blogPosts', blog);
	callback && callback();
};
const deleteBlogPost = (dispatch) => async (id) => {
	await jsonServer.delete(`/blogPosts/${id}`);

	dispatch({ type: 'DELETE_BLOG_POST', payload: id });
};
const editBlogPost = (dispatch) => async (blog, callback) => {
	await jsonServer.put(`blogPosts/${blog.id}`, blog);
	dispatch({ type: 'EDIT_BLOG_POST', payload: blog });
	callback && callback();
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
	[]
);
