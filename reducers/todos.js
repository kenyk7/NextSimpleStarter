import { ADD_TODO, REMOVE_TODO } from '../actions';

const initialState = [
	{
		text: 'Use Redux'
	}
]

export default function (state = initialState, action) {
	const { type, text, todo } = action;

	switch (type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: Math.random().toString(36).substring(2),
					text
				}
			];
		case REMOVE_TODO:
			return state.filter(i => i !== todo);
		default:
			return state;
	}
}
