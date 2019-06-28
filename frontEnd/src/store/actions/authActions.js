export const authenticateUser = (token, user, description) => {
	return {
		type: 'AUTHENTICATION',
		status: true,
		token,
		user,
		description
	};
};

export const disconnectUser = () => {
	return {
		type: 'DISCONNECTION',
		status: false,
		token: null,
		user: {},
		description: {}
	};
};
