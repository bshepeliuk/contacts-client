import "./style.scss";
import React from "react";
import { Table, Typography } from "antd";

const { Paragraph } = Typography;

const columns = [
	{
		title: "Phone",
		dataIndex: "phone",
		render: (phone) => <Paragraph copyable>{phone}</Paragraph>,
	},
	{
		title: "Nationality",
		dataIndex: "nat",
		filters: [
			{ value: "AU", text: "AU" },
			{ value: "BR", text: "BR" },
			{ value: "CA", text: "CA" },
			{ value: "CH", text: "CH" },
			{ value: "DE", text: "DE" },
			{ value: "DK", text: "DK" },
			{ value: "ES", text: "ES" },
			{ value: "FI", text: "FI" },
			{ value: "FR", text: "FR" },
			{ value: "GB", text: "GB" },
			{ value: "IE", text: "IE" },
			{ value: "IR", text: "IR" },
			{ value: "NO", text: "NO" },
			{ value: "NL", text: "NL" },
			{ value: "NZ", text: "NZ" },
			{ value: "TR", text: "TR" },
			{ value: "US", text: "US" },
		],
		render: (nat) => {
			return <div>{nat}</div>;
		},
	},

	{
		title: "Date of birthday",
		dataIndex: "dob",
		render: ({ date }) => {
			const d = new Date(date);
			const year = d.getFullYear();
			const month = d.getMonth() + 1;
			const day = d.getDate();
			const fullDate = `${month}/${day}/${year}`;

			return <div>{fullDate}</div>;
		},
	},
	{
		title: "Gender",
		dataIndex: "gender",
		filters: [
			{ text: "Male", value: "male" },
			{ text: "Female", value: "female" },
		],
	},
	{
		title: "Email",
		dataIndex: "email",
		render: (email) => <Paragraph copyable>{email}</Paragraph>,
	},
	{
		title: "Full Name",
		dataIndex: "name",
		sorter: true,
		render: (name) => (
			<div>
				{name.first} {name.last}
			</div>
		),
	},
	{
		title: "Location",
		dataIndex: "location",
		render: (location) => {
			const fullLocation = `/${location.country}/${location.street.number} ${location.street.name}, ${location.city}, ${location.state} ${location.postcode}`;

			return <div>{fullLocation}</div>;
		},
	},
];

const View = ({ contacts, isLoading, filter, sort }) => {
	const handleTableChange = (pagination, filters, sorter) => {
		const { order, field } = sorter;
		// refactoring
		sort({ sortField: field, sortOrder: order });
		filter(filters);
	};

	return (
		<Table
			dataSource={contacts}
			columns={columns}
			rowKey={(contact) => contact.phone}
			loading={isLoading}
			onChange={handleTableChange}
		/>
	);
};

export { View };
