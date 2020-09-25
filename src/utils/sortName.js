import { getFullName } from "./getFullName";

const ASC = "ASC";
const DESC = "DESC";
let order = ASC;

function sortName(items) {
	let sortedArr;

	const sort = ({ items, revert }) => {
		return [].concat(items).sort((prev, next) => {
			const prevFullName = getFullName(prev).toLowerCase();
			const nextFullName = getFullName(next).toLowerCase();

			if (!revert) return prevFullName > nextFullName ? 1 : -1;
			if (revert) return prevFullName > nextFullName ? -1 : 1;
		});
	};

	if (order === ASC) {
		sortedArr = sort({ items, revert: false });
		order = DESC;
	} else if (order === DESC) {
		sortedArr = sort({ items, revert: true });
		order = ASC;
	}

	return [...sortedArr];
}

export default sortName;
