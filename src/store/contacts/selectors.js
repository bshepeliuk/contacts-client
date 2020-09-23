import { createSelector } from "reselect";

const _getContacts = (state) => state.contacts;

export const getContacts = createSelector(
	[_getContacts],
	({ items, filters: { nat, gender, name } }) => {
		if (gender) return items.filter((item) => gender.includes(item.gender));
		if (nat) return items.filter((item) => nat.includes(item.nat));
		if (name) {
			return items.filter((item) => {
				const fullName = `${item.name.first} ${item.name.last}`.toLowerCase();
				return fullName.includes(name.toLowerCase());
			});
		}

		return items;
	}
);
