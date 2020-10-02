import React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

function PhoneLink({ phone }) {
	return (
		<Paragraph copyable>
			<a href={`phone:${phone}`} target="_blank" title={phone}>
				{phone}
			</a>
		</Paragraph>
	);
}

export default PhoneLink;
