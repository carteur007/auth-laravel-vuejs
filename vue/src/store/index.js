import { createStore } from "vuex";
import axiosclient from "../axiosclient";
const store = createStore({
   state: {
		user: {
			data: {},
			token: sessionStorage.getItem('TOKEN')
		}
	},
	getters: {},
	actions: {
		register({ commit }, user) {
			return axiosclient.post('/register', user, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
				}
			}).then(({ data }) => {
					commit("setUser", data);
					return data;
				})
		},
		login({ commit }, user) {
			return axiosclient.post('/login', user, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
				}
			}).then(({ data }) => {
					commit("setUser", data);
					return data;
				})
		},
		logout({ commit }) {
			return axiosclient.post('/logout')
				.then((response) => {
					commit("logout");
					return response;
				});
		}
	},
	mutations: {
		logout: (state) => {
			state.user.data = {};
			state.user.token = null;
			sessionStorage.removeItem('TOKEN');
		},
		profile: (state) => {
		},
		parametres: (state) => {
		},
		setUser: (state, userData) => {
			state.user.token = userData.token;
			state.user.data = userData.user;
			sessionStorage.setItem('TOKEN', userData.token);
		},
	},
	modules: {}
});

export default store;