import { compose } from "redux";
import { connect } from "react-redux";

import { ContactsView } from "./view";
import contactActions from "store/contacts/actions";
import { getContacts } from "store/contacts/selectors";

const mapStateToProps = (state) => {
	return {
		contacts: getContacts(state),
		filters: state.contacts.filters,
	};
};

const mapDispatchToProps = {
	fetchContacts: contactActions.fetchContactsStart,
	liveSearch: contactActions.searchStart,
};

const PageContacts = compose(connect(mapStateToProps, mapDispatchToProps))(
	ContactsView
);

export { PageContacts };
