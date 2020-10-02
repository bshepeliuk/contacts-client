import React from "react";

import useCopy from "hooks/useCopy";

function EmailLink({ email }) {
	const { isCopied, onCopy } = useCopy(email);
	return (
		<>
			<a href={`mailto:${email}`} target="_blank" title={email}>
				{email}
			</a>
			<button type="button" onClick={onCopy}>
				{isCopied ? "copied" : "copy"}
			</button>
		</>
	);
}

export default EmailLink;
