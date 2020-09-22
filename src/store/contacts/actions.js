import { createAction } from "../utils";

export const OActionTypes = {
	getContactsStart: "@contacts/GET_CONTACTS_START",
	getContactsSuccess: "@contacts/GET_CONTACTS_SUCCESS",
	getContactsError: "@contacts/GET_CONTACTS_ERROR",
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
};

export default contactActions;
