export default function getFullDate(date) {
	const d = new Date(date);
	const year = d.getFullYear();
	const month = d.getMonth() + 1;
	const day = d.getDate();
	const fullDate = `${month}/${day}/${year}`;

	return fullDate;
}
