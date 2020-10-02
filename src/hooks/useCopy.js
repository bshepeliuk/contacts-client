import { useState, useEffect } from "react";

export default function useCopy(value) {
	const [isCopied, setCopied] = useState(false);

	const onCopy = () => {
		navigator.clipboard.writeText(value);
		setCopied(true);
	};

	useEffect(() => {
		const timer = setTimeout(() => setCopied(false), 2000);
		return () => clearTimeout(timer);
	}, [isCopied]);

	return {
		isCopied,
		onCopy,
	};
}
