import { GENDER } from "constants/gender";
import { normalizeNationalities } from "utils/normalizeNationalities";

export default function useContactStats(contacts) {
	const male = contacts.filter((contact) => contact.gender === GENDER.male);
	const female = contacts.filter(
		(contact) => contact.gender === GENDER.female
	);
	const indeterminate = contacts.filter(
		(contact) =>
			contact.gender !== GENDER.female && contact.gender !== GENDER.male
	);
	const numberOfContacts = contacts.length;

	const isMale = male.length > female.length;
	const whichGender = isMale ? "Male" : "Female";

	const genderCount = isMale
		? male.length - female.length
		: female.length - male.length;

	const nationalities = normalizeNationalities(contacts);

	return {
		numberOfContacts,
		whichGender,
		genderCount,
		nationalities,
		numberOfMale: male.length,
		numberOfFemale: female.length,
		numberOfOthers: indeterminate.length,
	};
}
