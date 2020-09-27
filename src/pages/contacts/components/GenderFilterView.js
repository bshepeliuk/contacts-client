import React from "react";
import { Select } from "antd";

const { Option } = Select;

function GenderFilterView({ onFilter }) {
	const filter = [
		{ text: "Male", value: "male" },
		{ text: "Female", value: "female" },
	];

	const onChange = (value) => {
		if (!value) {
			onFilter({ gender: null });
		} else {
			onFilter({ gender: [value] });
		}
	};

	return (
		<Select
			allowClear
			showSearch
			style={{ width: 200, marginBottom: 5 }}
			placeholder="Filter by gender"
			optionFilterProp="children"
			onChange={onChange}
		>
			{filter.map((item) => (
				<Option key={item.value} value={item.value}>
					{item.text}
				</Option>
			))}
		</Select>
	);
}

export default GenderFilterView;
