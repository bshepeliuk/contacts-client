export const filterBy = (field, items, filterArr) => {
	return items.filter((item) => filterArr.includes(item[field]));
};
