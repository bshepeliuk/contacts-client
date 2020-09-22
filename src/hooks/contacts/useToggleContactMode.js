import { useEffect, useState } from "react";

function useToggleContactMode() {
	const _CONTACTS_MODE = "CONTACTS_MODE";
	const _TABLE = "TABLE";
	const _CARDS = "CARDS";

	const [mode, setMode] = useState(_TABLE);

	useEffect(() => {
		const modeFromStorage = localStorage.getItem(_CONTACTS_MODE);

		if (!modeFromStorage) {
			localStorage.setItem(_CONTACTS_MODE, _TABLE);
		}

		if (modeFromStorage) {
			setMode(modeFromStorage);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(_CONTACTS_MODE, mode);
	}, [mode]);

	const onToggleMode = () => {
		if (mode === _TABLE) return setMode(_CARDS);
		if (mode === _CARDS) return setMode(_TABLE);
	};

	const isTableMode = _TABLE === mode || false;

	return { onToggleMode, isTableMode };
}

export default useToggleContactMode;
