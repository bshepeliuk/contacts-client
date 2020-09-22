import { createSelector } from "reselect";

const _getContacts = (state) => state.contacts;

export const getContacts = createSelector(
	[_getContacts],
	(contacts) => contacts.items
);
