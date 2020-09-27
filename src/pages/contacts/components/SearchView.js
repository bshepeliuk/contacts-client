import React from "react";
import { Input } from "antd";

function SearchView({ onLiveSearch }) {
	const inputNameRef = React.useRef("");
	const inputCreatorRef = React.useRef("");

	const NAME_FIELD = "name";
	const CREATOR_FIELD = "creator";

	const handleChange = ({ target }) => {
		if (target.name === NAME_FIELD) {
			onLiveSearch({ name: inputNameRef.current.input.value });
		}

		if (target.name === CREATOR_FIELD) {
			onLiveSearch({ creator: inputCreatorRef.current.input.value });
		}
	};

	return (
		<>
			<Input
				allowClear
				name={NAME_FIELD}
				style={{ width: 200, marginBottom: 5 }}
				ref={inputNameRef}
				type="text"
				placeholder="search by name"
				defaultValue=""
				onChange={handleChange}
			/>
			<Input
				allowClear
				name={CREATOR_FIELD}
				style={{ width: 200, marginBottom: 5 }}
				ref={inputCreatorRef}
				type="text"
				placeholder="search by creator"
				defaultValue=""
				onChange={handleChange}
			/>
		</>
	);
}

export default SearchView;
