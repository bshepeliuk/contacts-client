import React from "react";
import { TableOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";

function ContactListModeBtn({ onToggleMode, isTableMode }) {
	return (
		<Button type="dashed" onClick={onToggleMode}>
			{isTableMode ? <UnorderedListOutlined /> : <TableOutlined />}
		</Button>
	);
}

export default ContactListModeBtn;
