import axios from "axios";
import store from "./store";

let axiosclient = axios.create({
	baseURL: 'http://127.0.0.1:8000/api',
});
axiosclient.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${store.state.user.token}`;
	config.headers.Accept = `application/json`;
	config.headers["Content-Type"] = `application/json`;
	return config;
});

export default axiosclient;