import { createReducer } from "../utils";
import { OActionTypes as contacts } from "./actions";

export const initialState = {
	isLoading: false,
	isError: false,
	error: null,
	items: [],
	filters: {
		gender: null,
		nat: null,
		name: "",
	},
	sorter: {
		sortField: null,
		sortOrder: null,
	},
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
	[contacts.filterSuccess](state, { payload: { filter } }) {
		return {
			...state,
			filters: {
				...state.filters,
				...filter,
			},
		};
	},
	[contacts.sorterSuccess](state, { payload: { sortField, sortOrder } }) {
		return {
			...state,
			sorter: {
				...state.sorter,
				sortField,
				sortOrder,
			},
		};
	},
	[contacts.searchSuccess](state, { payload }) {
		console.log("search", payload);
		return {
			...state,
			filters: {
				...state.filters,
				...payload,
			},
		};
	},
});
