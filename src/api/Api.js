import axios from "axios";
import { randomIntegerInRange } from "utils";

const API_URL = "https://randomuser.me/api/1.3?results=20";

const urls = {
	contacts: API_URL,
};
// randomIntegerInRange(1, )
export const Contacts = {
	get() {
		return axios.get(urls.contacts);
	},
};
