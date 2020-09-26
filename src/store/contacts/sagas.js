import { put, call, takeLatest, debounce } from "redux-saga/effects";
import { notification } from "antd";

import contactActions, { OActionTypes } from "store/contacts/actions";
import Api from "../../api";

function* fetchContacts() {
	try {
		const res = yield call(Api.Contacts.get);

		yield put(
			contactActions.fetchContactsSuccess({ contacts: res.data.results })
		);
	} catch (error) {
		notification.error({
			placement: "bottomRight",
			bottom: 50,
			duration: 3,
			rtl: true,
			description: "Please try again later.",
			message: "Error!!!",
		});
		yield put(
			contactActions.fetchContactsError({ message: error.message })
		);
	}
}
export function* fetchContactsWatcher() {
	yield takeLatest(OActionTypes.getContactsStart, fetchContacts);
}

function* filter({ payload: { filter } }) {
	yield put(contactActions.filterSuccess({ filter }));
}
export function* filterWatcher() {
	yield takeLatest(OActionTypes.filterStart, filter);
}

function* sorter({ payload: { sortField, sortOrder } }) {
	yield put(contactActions.sorterSuccess({ sortField, sortOrder }));
}
export function* sorterWatcher() {
	yield takeLatest(OActionTypes.sorterStart, sorter);
}

function* search({ payload }) {
	yield put(contactActions.searchSuccess(payload));
}
export function* searchWatcher() {
	yield debounce(1000, OActionTypes.searchStart, search);
}
