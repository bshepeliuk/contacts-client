export default function getFullLocation(location) {
	return `/${location.country}/${location.street.number} ${location.street.name}, ${location.city}, ${location.state} ${location.postcode}`;
}
