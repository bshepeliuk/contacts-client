import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import { getContacts } from "store/contacts/selectors";

const mapStateToProps = (state) => {
	return {
		contacts: getContacts(state),
	};
};

const mapDispatchToProps = null;

const StatisticsView = compose(connect(mapStateToProps, mapDispatchToProps))(
	View
);

export { StatisticsView };
