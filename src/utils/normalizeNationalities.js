import { NATIONALITIES } from "constants/nationalities";

export const normalizeNationalities = (contacts) => {
	const nat = contacts.reduce(
		(acc, value) => ({
			...acc,
			[value.nat]: (acc[value.nat] || 0) + 1,
		}),
		{}
	);

	return Object.entries(nat).map(([key, count]) => {
		if (NATIONALITIES[key]) {
			return {
				...NATIONALITIES[key],
				count,
			};
		}
	});
};
