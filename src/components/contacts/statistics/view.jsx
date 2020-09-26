import "./style.scss";
import React from "react";
import { Row, Col, Statistic, Card } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

const View = ({ male, female, other, contacts, nat }) => {
	const isMale = male.length > female.length;
	const maleOrFemale = isMale ? "Male" : "Female";
	const count = isMale
		? male.length - female.length
		: female.length - male.length;

	return (
		<>
			<Row gutter={16}>
				<Col span={4}>
					<Statistic title="All contacts" value={contacts.length} />
				</Col>
				<Col span={4}>
					<Statistic title="Male" value={male.length} />
				</Col>
				<Col span={4}>
					<Statistic title="Female" value={female.length} />
				</Col>
				<Col span={4}>
					<Statistic title="Other" value={other.length} />
				</Col>
				<Col span={4}>
					<Card>
						<Statistic
							title={maleOrFemale}
							value={count}
							valueStyle={{ color: "#3f8600" }}
							prefix={<ArrowUpOutlined />}
						/>
					</Card>
				</Col>
			</Row>

			<Row gutter={[16, 16]}>
				{nat.map(([nat, count]) => (
					<Col span={1} key={`${nat}:${count}`}>
						<div className="stats-nat">
							<Statistic title={nat} value={count} />
						</div>
					</Col>
				))}
			</Row>
		</>
	);
};

export { View };
