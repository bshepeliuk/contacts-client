import "./style.scss";
import React from "react";
import { Table } from "antd";

const columns = [
	{
		title: "Phone",
		dataIndex: "phone",
	},
	{
		title: "Gender",
		dataIndex: "gender",
	},
	{
		title: "Email",
		dataIndex: "email",
	},
];

const View = ({ contacts }) => {
	return (
		<Table
			dataSource={contacts}
			columns={columns}
			rowKey={(contact) => contact.phone}
		/>
	);
};

export { View };
