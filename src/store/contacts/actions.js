import { createAction } from "../utils";

export const OActionTypes = {
	getContactsStart: "@contacts/GET_CONTACTS_START",
	getContactsSuccess: "@contacts/GET_CONTACTS_SUCCESS",
	getContactsError: "@contacts/GET_CONTACTS_ERROR",

	filterStart: "@contacts/FILTER_START",
	filterSuccess: "@contacts/FILTER_SUCCESS",

	sorterStart: "@contacts/SORTER_START",
	sorterSuccess: "@contacts/SORTER_SUCCESS",

	searchStart: "@contacts/SEARCH_START",
	searchSuccess: "@contacts/SEARCH_SUCCESS",
};

const contactActions = {
	fetchContactsStart() {
		return createAction(OActionTypes.getContactsStart)();
	},
	fetchContactsSuccess({ contacts }) {
		return createAction(OActionTypes.getContactsSuccess)({ contacts });
	},
	fetchContactsError() {
		return createAction(OActionTypes.getContactsError)();
	},

	filterStart(filter) {
		return createAction(OActionTypes.filterStart)({ filter });
	},
	filterSuccess({ filter }) {
		return createAction(OActionTypes.filterSuccess)({ filter });
	},

	sorterStart(sortInfo) {
		return createAction(OActionTypes.sorterStart)(sortInfo);
	},
	sorterSuccess(sortInfo) {
		return createAction(OActionTypes.sorterSuccess)(sortInfo);
	},

	searchStart(searchInfo) {
		return createAction(OActionTypes.searchStart)(searchInfo);
	},
	searchSuccess(searchInfo) {
		return createAction(OActionTypes.searchSuccess)(searchInfo);
	},
};

export default contactActions;
