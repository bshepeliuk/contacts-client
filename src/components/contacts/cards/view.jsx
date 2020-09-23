import "./style.scss";
import React from "react";
import { Card, List } from "antd";
import { BREAKPOINTS } from "constants/breakpoints";

const { Meta } = Card;

const View = ({ contacts }) => {
	return (
		<List
			grid={{
				gutter: [24, 16],
				BREAKPOINTS,
			}}
			dataSource={contacts}
			renderItem={(contact) => {
				const fullName = `${contact.name.first} ${contact.name.last}`;
				return (
					<List.Item>
						<Card
							hoverable
							style={{ width: "280px" }}
							cover={
								<img
									alt={fullName}
									src={contact.picture.large}
								/>
							}
						>
							<Meta
								title={fullName}
								description={contact.email}
							/>
						</Card>
					</List.Item>
				);
			}}
		/>
	);
};

export { View };
