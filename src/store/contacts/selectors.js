import { createSelector } from "reselect";
import { filterBy } from "utils/filterBy";
import { getFullName } from "utils/getFullName";
import sortName from "utils/sortName";

const _getContacts = (state) => state.contacts;

export const getContacts = createSelector(
	[_getContacts],
	({
		items,
		filters: { gender, nat, name, creator },
		sorter: { sortField },
	}) => {
		if (gender && nat) {
			return items.filter((item) => {
				return gender.includes(item.gender) && nat.includes(item.nat);
			});
		}

		if (gender) return filterBy("gender", items, gender);
		if (nat) return filterBy("nat", items, nat);

		if (name) {
			return items.filter((item) => {
				const fullName = getFullName(item).toLowerCase();
				return fullName.includes(name.toLowerCase());
			});
		}

		if (creator) {
			return items.filter((item) => {
				return item.login.username
					.toLowerCase()
					.includes(creator.toLowerCase());
			});
		}

		if (sortField === "name") {
			return sortName(items);
		}

		return items;
	}
);
