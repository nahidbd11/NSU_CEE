import bsCustomFileInput from "bs-custom-file-input";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import uuid from "react-uuid";
import useFetch from "../../../../customhooks/useFetch";
import {
    api_bulkStudentCoInsert,
    api_getAllCourse,
    api_getAllSemester,
    api_uploadStudentCo,
} from "../../../../utilities/allApis";
import { fetchData, fetchOptions } from "../../../../utilities/fetchData";
import { depertmentID } from "../../../../utilities/UtilityVariable";
import { useGlobal } from "../../context/GlobalContext";
import DashboardContentWrapper from "../../sharedComponets/DashboardContentWrapper";

import HeadMainToastComponent from "../../sharedComponets/Head_Main_Toast";

const StudentCourseOutcome = () => {
    //Api calling for courseData to show in select field
    const [options_course, setOptions_course] = useState();
    const [options_semester, setOptions_semester] = useState();
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedSemester, setSelectedSemester] = useState("");
    const [section, setSection] = useState("");
    const [selectedFile, setFile] = useState(null);
    const { handleUpload } = useGlobal();

    //Api calling for courseData to show in select field
    const { data: courseData, loading: courseDataLoading } = useFetch(
        api_getAllCourse,
        fetchOptions("GET")
    );

    //Api calling for semesterData to show in select field
    const { data: semesterData, loading: semesterDataLoading } = useFetch(
        api_getAllSemester,
        fetchOptions("GET")
    );

    console.log(selectedFile);

    //after submitting form
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(selectedFile);
        const redirectTo = "/studentCo";

        //upload file to server
        const resData = await handleUpload(
            `${api_uploadStudentCo}?courseId=${selectedCourse.value}&semesterId=${selectedSemester.value}&departmentId=${depertmentID}&sectionName=${section}`,
            selectedFile,
            redirectTo
        );
        console.log(resData);
        //upload response data to bulkinsert api
        if (resData && resData.length >= 1) {
            console.log(resData);
            //after upload if we get an array of list as response then call bulk api to  insert those new data
            const resBulkStudent = await fetchData(
                api_bulkStudentCoInsert,
                fetchOptions("POST", resData)
            );
            console.log(resBulkStudent);
            //if new record insert successfully then show toast success else toast errror message
            if (Array.isArray(resBulkStudent) && resBulkStudent.length > 0) {
                toast.success(
                    `Successfully inserted ${resData.length} records`
                );
            } else {
                toast.error(`Error while saving data`);
            }
        } else {
            toast.error("Please try again.problem while uploading..");
        }
        setFile(null); //reset file upload field
        setSelectedSemester(""); //reset selected semester
        setSelectedCourse(""); //reset selected course
    };
    //set options for course and semester select field through react-select
    useEffect(() => {
        //get options for react-select
        function selectOptions(data, val, lab) {
            if (data && Array.isArray(data)) {
                let options = data.map((d) => {
                    //check if it is semester then format will be like spring-2012
                    if (d.hasOwnProperty("title") && d.hasOwnProperty("year"))
                        return {
                            value: d[val],
                            label: d[lab] + "-" + d["year"],
                        };
                    return {
                        value: d[val],
                        label: d[lab],
                    };
                });
                return options;
            }
        }
        let course_options = selectOptions(courseData, "id", "courseCode");
        setOptions_course(course_options); //options for course select
        let semester_options = selectOptions(semesterData, "id", "title");
        setOptions_semester(semester_options); //options for semester select
    }, [courseData, semesterData]);
    React.useEffect(() => {
        bsCustomFileInput.init(); //initialize bootstrap customfile input plugin
    }, []);
    return (
        <div className="wrapper">
            <HeadMainToastComponent />
            <DashboardContentWrapper>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div class="card w-100 rounded shadow-lg">
                            <div class="card-body">
                                <div className="d-flex flex-column flex-sm-row justify-content-between">
                                    <h1 class="text-secondary card-title">
                                        Upload Grade File
                                    </h1>
                                    {/* TODO: for create form */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12  ">
                        <div className="card shadow-lg mt-0">
                            <h3 className="text-center text-info my-5 font-weight-bold ">
                                Student Course Outcome
                            </h3>

                            <form
                                className="form-horizontal"
                                onSubmit={handleSubmit}
                            >
                                <div className="card-body">
                                    <div className="form-group row">
                                        <label
                                            htmlFor="inputTitle"
                                            className="col-sm-2 col-form-label"
                                        >
                                            Course Code:
                                        </label>
                                        <div className="col-sm-10">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={{
                                                    label: "Select Course",
                                                    value: "",
                                                }}
                                                value={selectedCourse}
                                                onChange={(selectedOption) =>
                                                    setSelectedCourse(
                                                        selectedOption
                                                    )
                                                }
                                                options={options_course}
                                                menuPortalTarget={document.body}
                                                styles={{
                                                    menuPortal: (base) => ({
                                                        ...base,
                                                        zIndex: 9999,
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label
                                            htmlFor="inputyear"
                                            className="col-sm-2 col-form-label"
                                        >
                                            Section:
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                // required
                                                type="text"
                                                className="form-control form-control-sm"
                                                id="inputyear"
                                                value={section}
                                                onChange={(e) =>
                                                    setSection(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label
                                            htmlFor="inputyear"
                                            className="col-sm-2 col-form-label"
                                        >
                                            Semester
                                        </label>
                                        <div className="col-sm-10">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={{
                                                    label: "Select Semester",
                                                    value: "",
                                                }}
                                                value={selectedSemester}
                                                onChange={(selectedOption) =>
                                                    setSelectedSemester(
                                                        selectedOption
                                                    )
                                                }
                                                options={options_semester}
                                                menuPortalTarget={document.body}
                                                styles={{
                                                    menuPortal: (base) => ({
                                                        ...base,
                                                        zIndex: 9999,
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label
                                            htmlFor="inputyear"
                                            className="col-sm-2 col-form-label"
                                        >
                                            Upload Grade File
                                        </label>
                                        <div className="custom-file col-sm-10 pl-3">
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="customFile"
                                                onChange={(e) => {
                                                    setFile(e.target.files[0]);
                                                    e.target.value = null; //after set file make target value empty for re-upload
                                                }}
                                            />
                                            <label
                                                className="custom-file-label"
                                                htmlFor="customFile"
                                            >
                                                {!selectedFile
                                                    ? "Choose your file"
                                                    : selectedFile.name}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-success button-create float-right btn-sm"
                                    >
                                        Create
                                    </button>
                                </div>
                                {/* /.card-footer */}
                            </form>
                        </div>
                    </div>
                </div>
            </DashboardContentWrapper>
        </div>
    );
};

export default StudentCourseOutcome;
