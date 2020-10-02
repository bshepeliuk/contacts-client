import "../style.scss";
import React from "react";

import PhoneLink from "atoms/PhoneLink";
import EmailLink from "atoms/EmailLink";
import getFullDate from "utils/getFullDate";
import getFullLocation from "utils/getFullLocation";

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
		render: (phone) => <PhoneLink phone={phone} />,
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
			const fullDate = getFullDate(date);
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
		render: (email) => <EmailLink email={email} />,
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
			const fullLocation = getFullLocation(location);
			return <div>{fullLocation}</div>;
		},
	},
];

export default columns;
