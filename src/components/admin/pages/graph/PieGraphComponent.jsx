import React from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

function PieGraphComponent() {
	const data01 = [
		{
			title: "CO1",
			value: 400,
		},
		{
			title: "CO2",
			value: 300,
		},
		{
			title: "CO3",
			value: 300,
		},
	];
	const data02 = [
		{
			title: "PO(A)",
			value: 2400,
		},
		{
			title: "PO(B)",
			value: 4567,
		},
		{
			title: "PO(C)",
			value: 1398,
		},
	];

	return (
		<ResponsiveContainer width="100%" height={300}>
			<PieChart width={730} height={250}>
				<Pie
					data={data01}
					dataKey="value"
					nameKey="title"
					cx="50%"
					cy="50%"
					outerRadius={50}
					fill="#8884d8"
				/>
				<Pie
					data={data02}
					dataKey="value"
					nameKey="title"
					cx="50%"
					cy="50%"
					innerRadius={60}
					outerRadius={80}
					fill="#82ca9d"
					label
				/>
				<Legend />
				<Tooltip />
			</PieChart>
		</ResponsiveContainer>
	);
}

export default PieGraphComponent;
