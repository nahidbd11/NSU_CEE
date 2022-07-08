import React, { useEffect, useState } from "react";
import HeadMainToastComponent from "../../../sharedComponets/Head_Main_Toast";
import DashboardContentWrapper from "../../../sharedComponets/DashboardContentWrapper";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";

import CoBarStackedComponent from "./CoBarStackedComponent";
import useFetch from "../../../../../customhooks/useFetch";

import Demo from "../Demo";
import {
    api_courseBySemesterId,
    api_getAllCourse,
    api_getAllSemester,
    api_getCographInfo,
    api_sectionByCourseId,
} from "../../../../../utilities/allApis";
import { fetchData, fetchOptions } from "../../../../../utilities/fetchData";
import LineGraphComponent from "../LineGraphComponent";

//fetch for options in select field
async function fetchSelectOptions(url, name) {
    const resData = await fetchData(url);
    if (Array.isArray(resData)) {
        let options = resData.map((data) => {
            switch (name) {
                case "semesters":
                    return {
                        value: data.id,
                        label: `${data.title}-${data.year}`,
                    };
                case "courses":
                    return { value: data.id, label: data.courseCode };
                case "sections":
                    return { value: data, label: data };
                default:
            }
        });
        return options;
    }
}

const Graph = () => {
    const [semesOptions, setSemesOptions] = useState();
    const [coursesOptions, setCoursesOptions] = useState();
    const [sectionsOptions, setSectionsOptions] = useState();

    const options_section = [
        { value: "sec1", label: "SECTION 1" },
        { value: "sec2", label: "SECTION 2" },
        { value: "sec3", label: "SECTION 3" },
        { value: "sec4", label: "SECTION 4" },
        { value: "sec5", label: "SECTION 5" },
        { value: "sec6", label: "SECTION 6" },
        { value: "sec7", label: "SECTION 3" },
        { value: "sec8", label: "SECTION 4" },
        { value: "sec9", label: "SECTION 5" },
        { value: "sec10", label: "SECTION 6" },
    ];

    const customStyles = {
        control: (base) => ({
            ...base,
            height: 35,
            minHeight: 35,
            minWidth: 150,
        }),
    };
    const multiSelectCustomStyle = {
        valueContainer: (provided, state) => ({
            ...provided,
            textOverflow: "ellipsis",
            maxWidth: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
        }),
        control: (base) => ({
            ...base,
            maxHeight: 65,
            minHeight: 35,
            minWidth: 150,
            overflow: "auto",
        }),
    };
    const [selectedSemester, setSelectedSemester] = useState();
    const [selectedSection, setSelectedSection] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [cographData, setCographData] = useState();

    // const handleChange = (selectedOption) => {
    // 	setSelectedOption(selectedOption);
    // 	console.log(selectedOption);
    // };

    const handleGraphFilter = async () => {
        //send req to get co graph data
        if (selectedSection && selectedCourse && selectedSemester) {
            let section_name = selectedSection
                .map((sec) => sec.value)
                .join(","); //convert multiple section selection to single string
            const api_Cographfilter = `${api_getCographInfo}?semesterId=${selectedSemester.value}&courseId=${selectedCourse.value}&sectionName=${section_name}`;
            console.log(api_Cographfilter);
            const resData = await fetchData(
                api_Cographfilter,
                fetchOptions("GET")
            );
            // setSelectedSemester(""); //reset selectedSemester name
            // setSelectedCourse(""); //reset selectedCourse
            // setSelectedSection([]); //reset selectedSection
            // console.log(resData);
            setCographData(resData);
        }
    };
    console.log(cographData);

    useEffect(() => {
        //set option for semester select field
        fetchSelectOptions(api_getAllSemester, "semesters").then((d) =>
            setSemesOptions(d)
        );
    }, []);
    //fetch section according to selected course from course select field
    useEffect(() => {
        //set option for course select field
        if (selectedSemester) {
            fetchSelectOptions(
                `${api_courseBySemesterId}?semesterId=${selectedSemester.value}`,
                "courses"
            ).then((d) => setCoursesOptions(d));
        }
    }, [selectedSemester]);

    //fetch section according to selected course from course select field
    useEffect(() => {
        if (selectedCourse) {
            //set option for section select field
            fetchSelectOptions(
                `${api_sectionByCourseId}?courseId=${selectedCourse.value}`,
                "sections"
            ).then((d) => {
                setSectionsOptions(d);
            });
        }

        console.log(selectedCourse);
    }, [selectedCourse]);

    return (
        <div className="wrapper">
            <HeadMainToastComponent />
            <DashboardContentWrapper>
                <div className="row ">
                    {/* <div className="col-12">
						<div class="card w-100 rounded shadow-lg">
							<div class="card-body ">
								<div className="d-flex flex-column flex-sm-row justify-content-between">
									<h1 class="card-title text-secondary">Graph</h1>
								</div>
							</div>
						</div>
					</div> */}
                    <div className="col-12">
                        <div class="card w-100 rounded shadow-lg p-0">
                            <h1 class="card-title text-secondary text-center mt-3">
                                Select graph
                            </h1>
                            <div class="card-body ">
                                <br />
                                <div className="row justify-content-center">
                                    <div className="col-12 col-sm-4 mb-3 ">
                                        <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            placeholder="Select semester"
                                            value={selectedSemester}
                                            onChange={(selectedOption) => {
                                                setSelectedSemester(
                                                    selectedOption
                                                );
                                            }}
                                            options={semesOptions}
                                            styles={customStyles}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-4 mb-3 ">
                                        <Select
                                            placeholder="Select Courses"
                                            // components={animatedComponents}
                                            value={selectedCourse}
                                            onChange={(selectedOption) =>
                                                setSelectedCourse(
                                                    selectedOption
                                                )
                                            }
                                            options={coursesOptions}
                                            // isMulti
                                            styles={customStyles}
                                        />
                                    </div>
                                    <div className=" col-12 col-sm-4 mb-3">
                                        <Select
                                            placeholder="Select section"
                                            value={selectedSection}
                                            isMulti
                                            closeMenuOnSelect={false}
                                            onChange={(selectedOption) =>
                                                setSelectedSection(
                                                    selectedOption
                                                )
                                            }
                                            options={sectionsOptions}
                                            styles={multiSelectCustomStyle}
                                        />
                                    </div>
                                </div>
                                <br />

                                <div className="text-center">
                                    <button
                                        className="btn btn-primary btn-sm "
                                        style={{
                                            minWidth: "25%",
                                        }}
                                        onClick={handleGraphFilter}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10">
                        <div className="card shadow-lg rounded">
                            <div className="card-body">
                                <h5 className="text-info">CO Graph</h5>
                                {cographData && (
                                    <CoBarStackedComponent
                                        selectedCourse={selectedCourse}
                                        cographData={cographData}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Demo /> */}
            </DashboardContentWrapper>
        </div>
    );
};

export default Graph;
