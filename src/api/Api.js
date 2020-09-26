import axios from "axios";
import { randomIntegerInRange } from "utils";

const API_URL = "https://randomuser.me/api/1.3";
const results = randomIntegerInRange(1, 2000);

const urls = {
	contacts: API_URL,
};

export const Contacts = {
	get() {
		return axios.get(`${urls.contacts}?results=${results}`);
	},
};
