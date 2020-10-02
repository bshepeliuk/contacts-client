import React from "react";
import { Select } from "antd";
import { NATIONALITIES_SELECT_VALUES } from "constants/nationalities";

const { Option } = Select;

function NationalityFilterView({ onFilter }) {
	const [selected, setSelected] = React.useState([]);

	const handleChange = (value) => {
		setSelected(value);

		if (value.length === 0) {
			onFilter({ nat: null });
		} else {
			onFilter({ nat: value });
		}
	};

	const filteredOptions = NATIONALITIES_SELECT_VALUES.filter(
		(o) => !selected.includes(o.value)
	);

	return (
		<Select
			allowClear
			showSearch
			mode="multiple"
			placeholder="Filter by nationality"
			value={selected}
			onChange={handleChange}
			style={{ width: 300, marginBottom: 5 }}
		>
			{filteredOptions.map((item) => (
				<Option key={item.value} value={item.value}>
					{item.text}
				</Option>
			))}
		</Select>
	);
}

export default NationalityFilterView;
