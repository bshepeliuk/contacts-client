import React from "react";
import { Button } from "antd";

import { CardListView } from "components/contacts/cards";
import { TableView } from "components/contacts/table";
import useToggleContactMode from "hooks/contacts/useToggleContactMode";
import NationalityFilterView from "./components/NationalityFilterView";
import GenderFilterView from "./components/GenderFilterView";
import SearchView from "./components/SearchView";
import SortByNameBtn from "./components/SortByNameBtn";
import ContactListModeBtn from "./components/ContactListModeBtn";
import { StatisticsView } from "components/contacts/statistics";
import "./style.scss";

const ContactsView = ({ fetchContacts, onLiveSearch, onFilter, onSort }) => {
	const { onToggleMode, isTableMode } = useToggleContactMode();

	React.useEffect(() => {
		fetchContacts();
	}, []);

	return (
		<>
			<div className="page-wrap">
				<Button type="primary" onClick={fetchContacts}>
					Reload
				</Button>
				<ContactListModeBtn
					onToggleMode={onToggleMode}
					isTableMode={isTableMode}
				/>
				<div className="sort-wrap">
					<SortByNameBtn onSort={onSort} />
				</div>
				<div className="filter-wrap">
					<SearchView onLiveSearch={onLiveSearch} />
					<GenderFilterView onFilter={onFilter} />
					<NationalityFilterView onFilter={onFilter} />
				</div>
			</div>
			<div>{isTableMode ? <TableView /> : <CardListView />}</div>

			<div className="statistics-wrap">
				<StatisticsView />
			</div>
		</>
	);
};

export { ContactsView };
