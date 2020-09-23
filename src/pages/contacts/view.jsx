import React from "react";
import { TableOutlined, UnorderedListOutlined } from "@ant-design/icons";

import { CardListView } from "components/contacts/cards";
import { TableView } from "components/contacts/table";
import useToggleContactMode from "hooks/contacts/useToggleContactMode";

function SearchView({ liveSearch }) {
	const inputRef = React.useRef("");
	const handleChange = () => liveSearch({ name: inputRef.current.value });

	return (
		<input
			ref={inputRef}
			type="text"
			placeholder="search by name"
			defaultValue=""
			onChange={handleChange}
		/>
	);
}

const ContactsView = ({ fetchContacts, liveSearch, filters }) => {
	const { onToggleMode, isTableMode } = useToggleContactMode();

	React.useEffect(() => {
		fetchContacts();
	}, []);

	return (
		<>
			<div>
				<button onClick={onToggleMode}>
					{isTableMode ? (
						<UnorderedListOutlined />
					) : (
						<TableOutlined />
					)}
				</button>
				<button onClick={fetchContacts}>refresh</button>
				<SearchView liveSearch={liveSearch} filters={filters} />
			</div>

			{isTableMode ? <TableView /> : <CardListView />}
		</>
	);
};

export { ContactsView };
