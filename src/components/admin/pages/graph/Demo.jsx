import React, { useState } from "react";
import HeadMainToastComponent from "../../sharedComponets/Head_Main_Toast";
import DashboardContentWrapper from "../../sharedComponets/DashboardContentWrapper";
import Select from "react-select";
import LineGraphComponent from "./LineGraphComponent";
import BarGraphComponent from "./BarGraphComponent";
import PieGraphComponent from "./PieGraphComponent";
import RadarGraphComponent from "./RadarGraphComponent";

const Demo = () => {
    const options_semester = [
        { value: "spring", label: "Spring" },
        { value: "fall", label: "Fall" },
        { value: "summer", label: "Summer" },
    ];
    const options_section = [
        { value: "sec1", label: "SECTION 1" },
        { value: "sec2", label: "SECTION 2" },
        { value: "sec3", label: "SECTION 3" },
    ];
    const options_course = [
        { value: "cee211", label: "CEE 211" },
        { value: "cee209", label: "CEE 209" },
        { value: "cee330", label: "CEE 330" },
    ];

    const customStyles = {
        control: (base) => ({
            ...base,
            height: 35,
            minHeight: 35,
            minWidth: 150,
        }),
    };
    const [selectedSemester, setSelectedSemester] = useState();
    const [selectedSection, setSelectedSection] = useState();
    const [selectedCourse, setSelectedCourse] = useState();

    // const handleChange = (selectedOption) => {
    // 	setSelectedOption(selectedOption);
    // 	console.log(selectedOption);
    // };
    return (
        <div className="row ">
            {/* <div className="col-12">
        <div class="card w-100 rounded shadow-lg p-0">
          <div class="card-body d-flex flex-column justify-content-center align-items-center">
            <h1 class="card-title text-secondary text-center">Select graph</h1>
            <br />
            <div className="d-flex flex-column flex-sm-row justify-content-center text-center ">
              <div className="mb-3 mr-3">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={{ label: "Select Semester", value: "" }}
                  value={selectedSemester}
                  onChange={(selectedOption) =>
                    setSelectedSemester(selectedOption)
                  }
                  options={options_semester}
                  styles={customStyles}
                />
              </div>
              <div className="mb-3 mr-3">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={{ label: "Select Section", value: "" }}
                  value={selectedSection}
                  onChange={(selectedOption) =>
                    setSelectedSection(selectedOption)
                  }
                  options={options_section}
                  styles={customStyles}
                />
              </div>
              <div className="mb-3 mr-3">
                <Select
                  defaultValue={{ label: "Select Course", value: "" }}
                  value={selectedCourse}
                  onChange={(selectedOption) =>
                    setSelectedCourse(selectedOption)
                  }
                  options={options_course}
                  styles={customStyles}
                />
              </div>
            </div>
            <br />

            <div className="col-6 col-sm-3">
              <button className="btn btn-primary btn-sm btn-block">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div> */}

            <div className="row">
                {/* TODO:Barchart */}
                <div className="col-12 col-sm-6">
                    <div className="card shadow-lg rounded">
                        <div className="card-body">
                            <h5 className="text-info">Bar chart</h5>
                            <BarGraphComponent />
                        </div>
                    </div>
                </div>
                {/* TODO:line chart */}
                <div className="col-12 col-sm-6">
                    <div className="card shadow-lg rounded">
                        <div className="card-body">
                            <h5 className="text-info">Line chart</h5>
                            <LineGraphComponent />
                        </div>
                    </div>
                </div>
                {/* TODO:pie chart */}
                <div className="col-12 col-sm-6">
                    <div className="card shadow-lg rounded">
                        <div className="card-body">
                            <h5 className="text-info">Pie chart</h5>
                            <PieGraphComponent />
                        </div>
                    </div>
                </div>
                {/* TODO:Radar chart */}
                <div className="col-12 col-sm-6">
                    <div className="card shadow-lg rounded">
                        <div className="card-body">
                            <h5 className="text-info">Radar chart</h5>
                            <RadarGraphComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Demo;
