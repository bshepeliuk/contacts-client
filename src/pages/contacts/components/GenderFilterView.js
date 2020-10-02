import React from "react";
import { Select } from "antd";
import { GENDER_SELECT_VALUES } from "constants/gender";

const { Option } = Select;

function GenderFilterView({ onFilter }) {
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
			{GENDER_SELECT_VALUES.map((item) => (
				<Option key={item.value} value={item.value}>
					{item.text}
				</Option>
			))}
		</Select>
	);
}

export default GenderFilterView;
