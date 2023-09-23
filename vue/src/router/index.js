import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';
import Enquettes from '../views/Enquettes.vue';
import Layout from '../components/Layout.vue';
import AuthLayout from '../components/AuthLayout.vue'
import store from '../store';


const routes = [
	{
		path: '/',
		redirect: '/dashboard',
		component: Layout,
		meta: {requiresAuth: true},
		children: [
			{path: '/dashboard',name: 'Dashboard', component: Dashboard},
			{path: '/enquettes',name: 'Enquettes', component: Enquettes}
		]
	},
	{
		path: '/auth',
		redirect: '/login',
		component: AuthLayout,
		meta: {isGuest: true},
		children: [
			{
				path: '/login',
				name: 'Login',
				component: Login
			},
			{
				path: '/register',
				name: 'Register',
				component: Register
			},
		]
	}

];

const router = createRouter({
	history: createWebHistory(),
	routes
});
/**
 *
 */
router.beforeEach((to,from,next) => {
	if (to.meta.requiresAuth && !store.state.user.token) {
			//Forcer l'authentification de l'utilisateur
		next({name: 'Login'})
	}else if (store.state.user.token && (to.meta.isGuest)) {
			//Renvoiyer l'utilisateur a la page d'administration s'il c'est authentifier
		next({name: 'Dashboard'})
	}else{
		next();
	}
})

export default router;