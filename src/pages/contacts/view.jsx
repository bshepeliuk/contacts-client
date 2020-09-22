import React from "react";
import { TableOutlined, UnorderedListOutlined } from "@ant-design/icons";

import { CardListView } from "components/contacts/cards";
import { TableView } from "components/contacts/table";
import useToggleContactMode from "hooks/contacts/useToggleContactMode";

const ContactsView = ({ fetchContacts }) => {
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
			</div>

			{isTableMode ? <TableView /> : <CardListView />}
		</>
	);
};

export { ContactsView };
