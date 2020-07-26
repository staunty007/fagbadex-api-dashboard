const state = () => ({
	authenticated: false,
	user: undefined,
	dfu: {
		// Means Default user
		name: 'Fagbadex Admin',
		email: 'admin@fagbadexnigeriaapi.com',
		password: 'fagbadexnigeriaapi'
	}
});

const mutations = {
	SET_USER(state, user) {
		state.user = user;
	},
	AUTHENTICATE(state, value) {
		state.authenticated = value;
	},
	LOGIN(state) {
		state.authenticated = true;
	},
	LOGOUT(state) {
		state.authenticated = false;
	}
};

const actions = {
	setUser(context, payload) {
		context.commit('SET_USER', payload);
	},
	authenticate(context, payload) {
		context.commit('AUTHENTICATE', payload);
	},
	login({ commit }, user) {
		commit('LOGIN');
		commit('SET_USER', user);
	},
	logout({ commit }) {
		commit('LOGOUT');
		commit('SET_USER', undefined);
	}
};

const getters = {
	user(state) {
		return state.user;
	},
	authenticated(state) {
		return state.authenticated;
	},
	getDefaultUser(state) {
		return state.dfu;
	}
};

export default {
	state,
	actions,
	mutations,
	getters
};
