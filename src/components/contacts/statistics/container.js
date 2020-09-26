import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import {
	getContacts,
	getMale,
	getFemale,
	getNat,
	getOther,
} from "store/contacts/selectors";

const mapStateToProps = (state) => {
	return {
		contacts: getContacts(state),
		male: getMale(state),
		female: getFemale(state),
		other: getOther(state),
		nat: getNat(state),
	};
};

const mapDispatchToProps = null;

const StatisticsView = compose(connect(mapStateToProps, mapDispatchToProps))(
	View
);

export { StatisticsView };
