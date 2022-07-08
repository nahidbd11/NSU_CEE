import React from "react";
import uuid from "react-uuid";
import {
    Bar,
    BarChart,
    CartesianGrid,
    LabelList,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Label,
} from "recharts";
import EmptydataComponent from "../../../sharedComponets/EmptydataComponent";

//font style of labellist
const labellistStyle = {
    textAnchor: "middle",
    fontSize: "1rem",
    fill: "black",
};
//default props of labellist for each bar
const labellistProps = (dataKey) => ({
    dataKey,
    position: "left",
    angle: "-45",
    offset: 10,
    formatter: (val) => val + "%",
    style: { labellistStyle },
});

const barobj = [
    { name: "Exemplary", dataKey: "exem", color: "#F4B2FF" },
    { name: "Satisfactory", dataKey: "sat", color: "#360289" },
    { name: "Developing", dataKey: "dev", color: "#6631B5" },
    { name: "Unsatisfactory", dataKey: "unsat", color: "#C485FF" },
];

//Main graph component
const CoBarStackedComponent = ({ selectedCourse, cographData }) => {
    let dataArr = [];
    //if cograph data has no error message then  format data for graph
    if (!cographData.message) {
        for (const [key, val] of Object.entries(cographData)) {
            console.log(key, val);
            //actual data  format for react-rechart which will be array of object like const data variable in bellow
            const dataobj = {
                xval: key,
                exem: val.Exemplary,
                sat: val.Satisfactory,
                dev: val.Developing,
                unsat: val.Unsatisfactory,
            };
            dataArr.push(dataobj);
        }
        console.log(dataArr);
    } else {
        //if no graph data found then show this
        return <EmptydataComponent message={"no record found"} />;
    }

    // const data = [
    //     {
    //         xval: "CO1",
    //         exem: 22,
    //         sat: 13,
    //         dev: 43,
    //         unsat: 22,
    //     },
    //     {
    //         xval: "CO2",
    //         exem: 1,
    //         sat: 17,
    //         dev: 26,
    //         unsat: 52,
    //     },
    //     {
    //         xval: "CO3",
    //         exem: 35,
    //         sat: 22,
    //         dev: 30,
    //         unsat: 13,
    //     },
    // ];

    return (
        <>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart
                    data={dataArr}
                    margin={{ left: 5, bottom: 25 }}
                    barSize={50}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="xval"
                        label={{
                            value: `${
                                (selectedCourse && selectedCourse.label) || ""
                            }`,
                            position: "bottom",
                        }}
                    />

                    <YAxis
                        interval={0}
                        ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                        tickFormatter={(p) => p + "%"}
                    >
                        <Label
                            angle={-90}
                            value="%of students"
                            position="left"
                            offset={-5}
                        />
                    </YAxis>
                    <Tooltip
                        formatter={(val, nam, props) => val + "%"}
                        // content={<CustomTooltip />}
                        labelFormatter={(label, payload) =>
                            payload[0] && (
                                <p className="text-primary font-weight-bold ">
                                    {label}
                                    <hr></hr>
                                </p>
                            )
                        }
                    />
                    <Legend verticalAlign="top" height={56} />
                    {/* rendar bar according to barObj */}
                    {barobj.map((bar) => (
                        <Bar
                            key={uuid()}
                            name={bar.name}
                            dataKey={bar.dataKey}
                            stackId="a"
                            fill={bar.color}
                            isAnimationActive={false}
                        >
                            <LabelList {...labellistProps(bar.dataKey)} />
                        </Bar>
                    ))}
                </BarChart>
            </ResponsiveContainer>
            {/*TODO:table to show graph data */}
            <table class="table mt-5 table-striped">
                <thead>
                    <tr className="graph-table-th">
                        <th scope="col"></th>
                        {Array.isArray(dataArr) &&
                            dataArr.map((data) => (
                                <th scope="col" key={uuid()}>
                                    {data.xval}
                                </th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {barobj.map((obj) => (
                        <tr>
                            <th scope="row">{obj.name}</th>
                            {dataArr.map((d) => (
                                <td>{d[obj.dataKey] || 0}%</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default CoBarStackedComponent;
