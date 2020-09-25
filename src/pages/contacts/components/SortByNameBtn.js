import React from "react";
import { Button } from "antd";

function SortByNameBtn({ onSort }) {
	const handleSort = () => {
		onSort({ sortField: "name" });
	};

	const onClearSort = () => onSort({ sortField: null });

	return (
		<>
			<Button onClick={handleSort}>sort by name</Button>
			<Button onClick={onClearSort}>clear</Button>
		</>
	);
}

export default SortByNameBtn;
