const initState = {
	status: false,
	token: null,
	user: {},
	description: {}
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case 'AUTHENTICATION':
			return {
				...state,
				status: true,
				token: action.token,
				user: action.user,
				description: action.description
			};
		case 'DISCONNECTION':
			return {
				...initState
			};
		default:
			return {
				...state
			};
	}
};

export default authReducer;
