import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import { getContacts } from "store/contacts/selectors";
import contactActions from "store/contacts/actions";

const mapStateToProps = (state) => {
	return {
		contacts: getContacts(state),
		isLoading: state.contacts.isLoading,
	};
};

const mapDispatchToProps = {
	filter: contactActions.filterStart,
	sort: contactActions.sorterStart,
};

const TableView = compose(connect(mapStateToProps, mapDispatchToProps))(View);

export { TableView };
