import { createReducer } from "../utils";
import { OActionTypes as contacts } from "./actions";

export const initialState = {
	isLoading: false,
	isError: false,
	error: null,
	items: [],
};

export const reducer = createReducer(initialState, {
	[contacts.getContactsStart](state) {
		return {
			...state,
			isError: false,
			error: null,
			isLoading: true,
		};
	},
	[contacts.getContactsSuccess](state, action) {
		return {
			...state,
			isLoading: false,
			items: action.payload.contacts,
		};
	},
	[contacts.getContactsError](state, action) {
		return {
			...state,
			isLoading: false,
			isError: true,
			error: action.payload.message,
		};
	},
});
