import React from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Label,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const BarGraphComponent = () => {
	const data = [
		{ noOfStds: 200, evaluate: "Satisfactory" },
		{ noOfStds: 180, evaluate: "UnSatisfactory" },
		{ noOfStds: 130, evaluate: "Developing" },
		{ noOfStds: 300, evaluate: "Exemplary" },
	];
	return (
		<ResponsiveContainer width="100%" height={300}>
			<BarChart data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="evaluate">
					<Label value="Result" position="insideBottom" offset={-5} />
				</XAxis>
				<YAxis>
					<Label
						value="student Number"
						position="insideLeft"
						offset={0}
						angle={-90}
					/>
				</YAxis>
				<Tooltip />
				<Legend verticalAlign="top" />
				<Bar
					name="Number of Students"
					dataKey="noOfStds"
					stackId="a"
					fill="#713475"
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};
export default BarGraphComponent;
