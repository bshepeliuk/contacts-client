import "./style.scss";
import React from "react";
import { Table } from "antd";
import columns from "./components/TableColumns";

const View = ({ contacts, isLoading }) => {
	return (
		<Table
			scroll={{ x: 1500 }}
			dataSource={contacts}
			columns={columns}
			rowKey={(contact) => contact.phone}
			loading={isLoading}
		/>
	);
};

export { View };
