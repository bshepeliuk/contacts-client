import React from "react";
import { Select } from "antd";

const { Option } = Select;

function NationalityFilterView({ onFilter }) {
	const [selected, setSelected] = React.useState([]);

	const filter = [
		{ value: "AU", text: "AU" },
		{ value: "BR", text: "BR" },
		{ value: "CA", text: "CA" },
		{ value: "CH", text: "CH" },
		{ value: "DE", text: "DE" },
		{ value: "DK", text: "DK" },
		{ value: "ES", text: "ES" },
		{ value: "FI", text: "FI" },
		{ value: "FR", text: "FR" },
		{ value: "GB", text: "GB" },
		{ value: "IE", text: "IE" },
		{ value: "IR", text: "IR" },
		{ value: "NO", text: "NO" },
		{ value: "NL", text: "NL" },
		{ value: "NZ", text: "NZ" },
		{ value: "TR", text: "TR" },
		{ value: "US", text: "US" },
	];

	const handleChange = (value) => {
		setSelected(value);

		if (value.length === 0) {
			onFilter({ nat: null });
		} else {
			onFilter({ nat: value });
		}
	};

	const filteredOptions = filter.filter((o) => !selected.includes(o.value));

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
