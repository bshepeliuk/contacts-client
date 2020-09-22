import { put, call, takeLatest } from "redux-saga/effects";

import contactActions, { OActionTypes } from "store/contacts/actions";
import Api from "../../api";

function* fetchContacts() {
	try {
		const { data } = yield call(Api.Contacts.get);

		yield put(
			contactActions.fetchContactsSuccess({ contacts: data.results })
		);
	} catch (error) {
		yield put(
			contactActions.fetchContactsError({ message: error.message })
		);
	}
}

export function* fetchContactsWatcher() {
	yield takeLatest(OActionTypes.getContactsStart, fetchContacts);
}
