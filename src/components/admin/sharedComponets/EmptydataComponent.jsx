import React from "react";

const EmptydataComponent = ({ message }) => {
	return (
		<div className="card">
			<p className="card-body text-center text-danger my-auto ">{message}</p>
		</div>
	);
};

export default EmptydataComponent;
