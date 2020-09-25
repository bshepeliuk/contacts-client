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

const ContactsView = ({ fetchContacts, onLiveSearch, onFilter, onSort }) => {
	const { onToggleMode, isTableMode } = useToggleContactMode();

	React.useEffect(() => {
		fetchContacts();
	}, []);

	return (
		<>
			<div>
				<Button type="primary" onClick={fetchContacts}>
					Reload
				</Button>
				<SortByNameBtn onSort={onSort} />
				<ContactListModeBtn
					onToggleMode={onToggleMode}
					isTableMode={isTableMode}
				/>

				<SearchView onLiveSearch={onLiveSearch} />
				<GenderFilterView onFilter={onFilter} />
				<NationalityFilterView onFilter={onFilter} />
			</div>

			{isTableMode ? <TableView /> : <CardListView />}
		</>
	);
};

export { ContactsView };
