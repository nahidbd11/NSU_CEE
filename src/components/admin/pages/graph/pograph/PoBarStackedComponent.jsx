import React from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
const data = [
	{
		course: "CEE 211",
		semester: "Spring 2009",
		satisfactory: 20,
		unsatisfactory: 50,
		exemplary: 10,
		developing: 20,
	},
	{
		course: "CEE 201",
		semester: "Spring 2011",
		satisfactory: 30,
		unsatisfactory: 20,
		exemplary: 30,
		developing: 20,
	},
	{
		course: "CEE 209",
		semester: "Spring 2020",
		satisfactory: 50,
		unsatisfactory: 20,
		exemplary: 15,
		developing: 15,
	},
	{
		course: "CEE 207",
		semester: "Spring 2021",
		satisfactory: 30,
		unsatisfactory: 20,
		exemplary: 30,
		developing: 20,
	},
];
function PoBarStackedComponent() {
	return (
		<>
			{" "}
			<ResponsiveContainer width="100%" height={400}>
				<BarChart data={data} margin={{ left: 5, bottom: 25 }} barSize={50}>
					<CartesianGrid strokeDasharray="3 3" />

					<XAxis dataKey="semester" xAxisId="semester" />
					<XAxis
						dataKey="course"
						xAxisId="course"
						axisLine={false}
						label={{
							value: "Assesment period Spring 2009 to Summer 2019",
							position: "bottom",
						}}
						margin={{ bottom: 15 }}
					/>

					<YAxis
						label={{
							value: "% of students",
							angle: -90,
							offset: -5,
							position: "left",
						}}
						ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
						tickFormatter={(p) => p + "%"}
					/>
					<Tooltip
						formatter={(val, nam, props) => val + "%"}
						// content={<CustomTooltip />}
						labelFormatter={(label, payload) =>
							payload[0] && (
								<p className="text-primary font-weight-bold ">
									{label + " " + payload[0].payload.course}
									<hr></hr>
								</p>
							)
						}
					/>
					<Legend verticalAlign="top" height={56} />
					<Bar
						name="Above 90%"
						dataKey="satisfactory"
						stackId="a"
						fill="#2C2C54"
						xAxisId="semester"
					/>
					<Bar
						name="Between 60% to 73%"
						dataKey="developing"
						stackId="a"
						fill="#00C6CC"
						xAxisId="semester"
					/>
					<Bar
						name="Less than 60%"
						dataKey="unsatisfactory"
						stackId="a"
						fill="#0B8486"
						xAxisId="semester"
					/>
					<Bar
						name="Between 73% to 90%"
						dataKey="exemplary"
						stackId="a"
						fill="#324B4B"
						xAxisId="semester"
					/>
				</BarChart>
			</ResponsiveContainer>
			{/* TODO:table to show graph data */}
			<table class="table mt-5 table-striped">
				<thead>
					<tr className="graph-table-th">
						<th scope="col"></th>
						<th scope="col">
							<p>Spring 2009</p> CEE 211
						</th>
						<th scope="col">
							<p>Spring 2011</p> CEE 201
						</th>
						<th scope="col">
							<p>Spring 2020</p> CEE 209
						</th>
						<th scope="col">
							<p>Spring 2021</p> CEE 207
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">less than 60%</th>
						<td>50%</td>
						<td>10%</td>
						<td>20%</td>
						<td>20%</td>
					</tr>
					<tr>
						<th scope="row">Between 60% to 73%</th>
						<td>50%</td>
						<td>20%</td>
						<td>30%</td>
						<td>40%</td>
					</tr>
					<tr>
						<th scope="row">Between 73% to 90%</th>
						<td>30%</td>
						<td>30%</td>
						<td>20%</td>
						<td>20%</td>
					</tr>
					<tr>
						<th scope="row">Above 90%</th>
						<td>20%</td>
						<td>10%</td>
						<td>20%</td>
						<td>50%</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default PoBarStackedComponent;

const CustomTooltip = ({ active, payload, label }) => {
	console.log(active, payload, label);
	return null;
};
