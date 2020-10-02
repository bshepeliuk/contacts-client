import React from "react";

import "./style.scss";
import { ArrowUpOutlined } from "@ant-design/icons";
import useContactStats from "hooks/contacts/useContactStats";
import NationalitiesStatsList from "./components/NationalitiesStatsList";

const View = ({ contacts }) => {
	const {
		numberOfContacts,
		numberOfOthers,
		numberOfFemale,
		numberOfMale,
		whichGender,
		genderCount,
		nationalities,
	} = useContactStats(contacts);

	return (
		<>
			<h1 className="gender-title">Gender</h1>
			<div className="gender-wrap">
				<div className="all-contacts">
					<h2>All</h2>
					<b>{numberOfContacts}</b>
				</div>

				<div className="genders">
					<div className="male">
						<h2>Male</h2>
						<b>{numberOfMale}</b>
					</div>

					<div className="female">
						<h2>Female</h2>
						<b>{numberOfFemale}</b>
					</div>

					<div className="other">
						<h2>Other</h2>
						<b>{numberOfOthers}</b>
					</div>
				</div>

				<div className="gender-more">
					<h2>{whichGender}</h2>
					<ArrowUpOutlined />
					<b>{genderCount}</b>
				</div>
			</div>

			<NationalitiesStatsList nationalities={nationalities} />
		</>
	);
};

export { View };
