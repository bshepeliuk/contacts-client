import "./style.scss";
import React from "react";
import { Card, Pagination } from "antd";
import { getFullName } from "utils/getFullName";
import EmailLink from "atoms/EmailLink";
import PhoneLink from "atoms/PhoneLink";

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
			<ul className="contact-list">
				{contacts?.slice(values.min, values.max).map((contact) => {
					const fullName = getFullName(contact);

					return (
						<li className="contact-item" key={contact.phone}>
							<img src={contact.picture.large} alt={fullName} />
							<h2 title={fullName}>{fullName}</h2>
							<EmailLink email={contact.email} className="link" />
							<PhoneLink phone={contact.phone} className="link" />
						</li>
					);
				})}
			</ul>

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
