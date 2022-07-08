import React from "react";
import {
	CartesianGrid,
	Label,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
const data = [
	{ name: "PO(A)", marks: 400 },
	{ name: "PO(B)", marks: 200 },
	{ name: "PO(D)", marks: 100 },
	{ name: "PO(E)", marks: 1000 },
	{ name: "PO(F)", marks: 50 },
	{ name: "PO(G)", marks: 350 },
	{ name: "PO(H)", marks: 235 },
	{ name: "PO(I)", marks: 165 },
	{ name: "PO(J)", marks: 20 },
	{ name: "PO(K)", marks: 165 },
	{ name: "PO(L)", marks: 20 },
];
function LineGraphComponent() {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<LineChart data={data}>
				<Line type="monotone" dataKey="marks" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" strokeDasharray="2 3" />
				<Legend verticalAlign="top" />
				<Tooltip />
				<XAxis dataKey="name">
					<Label value="PO" offset={0} position="insideBottom" />
				</XAxis>
				<YAxis label={{ value: "marks", angle: -90, position: "insideLeft" }} />
			</LineChart>
		</ResponsiveContainer>
	);
}

export default LineGraphComponent;
