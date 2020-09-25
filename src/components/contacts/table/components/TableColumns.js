import "../style.scss";
import React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

const columns = [
	{
		title: "Creator",
		dataIndex: "login",
		render: (login) => login.username,
	},
	{
		title: "Phone",
		dataIndex: "phone",
		width: 200,
		render: (phone) => <Paragraph copyable>{phone}</Paragraph>,
	},
	{
		title: "Nationality",
		dataIndex: "nat",
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
	},
	{
		title: "Email",
		dataIndex: "email",
		width: 300,
		render: (email) => <Paragraph copyable>{email}</Paragraph>,
	},
	{
		title: "Full Name",
		dataIndex: "name",
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

export default columns;
