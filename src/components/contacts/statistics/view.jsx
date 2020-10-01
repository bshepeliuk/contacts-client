import React from "react";
import { Row, Col, Statistic, Card } from "antd";

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
			<Row gutter={16}>
				<Col span={4}>
					<Statistic title="All contacts" value={numberOfContacts} />
				</Col>
				<Col span={4}>
					<Statistic title="Male" value={numberOfMale} />
				</Col>
				<Col span={4}>
					<Statistic title="Female" value={numberOfFemale} />
				</Col>
				<Col span={4}>
					<Statistic title="Other" value={numberOfOthers} />
				</Col>
				<Col span={4}>
					<Card style={{ width: 150 }}>
						<Statistic
							title={whichGender}
							value={genderCount}
							valueStyle={{ color: "#3f8600" }}
							prefix={<ArrowUpOutlined />}
						/>
					</Card>
				</Col>
			</Row>
			<NationalitiesStatsList nationalities={nationalities} />
		</>
	);
};

export { View };
