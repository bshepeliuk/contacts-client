import axios from "axios";

const API_URL = "https://randomuser.me/api/1.3?results=20";

const urls = {
	contacts: API_URL,
};

export const Contacts = {
	get() {
		return axios.get(urls.contacts);
	},
};
