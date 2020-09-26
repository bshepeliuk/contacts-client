import "./style.scss";
import React from "react";
import { Card, Pagination } from "antd";

const { Meta } = Card;

const View = ({ contacts }) => {
	const [defaultPage, setDefaultPage] = React.useState(1);
	const [pageSize, setPageSize] = React.useState(10);
	const [values, setValues] = React.useState({ min: 0, max: pageSize });

	const handleChange = (page, _pageSize) => {
		if (pageSize > _pageSize) {
			setDefaultPage(1);
			setPageSize(_pageSize);
		}

		setValues({
			min: (page - 1) * _pageSize,
			max: page * _pageSize,
		});
	};

	return (
		<>
			<div className="wrap">
				{contacts?.slice(values.min, values.max).map((contact) => {
					const fullName = `${contact.name.first} ${contact.name.last}`;
					return (
						<Card
							key={contact.phone}
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
					);
				})}
			</div>

			<div className="pagination">
				<Pagination
					defaultCurrent={defaultPage}
					total={contacts.length}
					defaultPageSize={pageSize}
					onChange={handleChange}
				/>
			</div>
		</>
	);
};

export { View };
