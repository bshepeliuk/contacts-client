import React from "react";

import "../style.scss";
import { getRandomColor } from "utils/getRandomColor";

function NationalitiesStatsList({ nationalities }) {
	return (
		<>
			<h1 className="nat-title">Nationalities</h1>

			<ul className="stats-nat">
				{nationalities.map((nat) => {
					const color = nat.color || getRandomColor();
					return (
						<li
							className="list-item"
							key={nat.name}
							style={{ backgroundColor: color }}
						>
							<h2>{nat.name}</h2>
							<p>{nat.count}</p>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default NationalitiesStatsList;
