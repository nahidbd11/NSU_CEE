import React from "react";

const style = {
	// paddingRight: "5rem",
};
const ErrorMessage = ({ messages }) => {
	if (typeof messages === "object" && Array.isArray(messages)) {
		return (
			<div style={style}>
				{messages.map((msg) => (
					<h6 className="text-danger">{msg}</h6>
				))}
			</div>
		);
	}
	return (
		<div style={style}>
			<h6 className="text-danger">{messages}</h6>
		</div>
	);
};

export default ErrorMessage;
