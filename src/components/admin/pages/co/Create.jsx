import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import useFetch from "../../../../customhooks/useFetch";
import {
	api_createCourseOutcome,
	api_getAllCourse,
	api_getAllProgramOutcome,
	api_getAllSemester,
} from "../../../../utilities/allApis";
import { fetchOptions } from "../../../../utilities/fetchData";
import { useGlobal } from "../../context/GlobalContext";

import DashboardContentWrapper from "../../sharedComponets/DashboardContentWrapper";

import HeadMainToastComponent from "../../sharedComponets/Head_Main_Toast";
const Create = () => {
	//state
	//initialState to create co
	const initialState = {
		semesterId: "",
		courseId: "",
		programOutcomeId: "",
		courseNo: "",
		coCode: "",
		description: "",
	};
	const [poCode, setPocode] = useState("");
	const [semes, setSemes] = useState("");

	const [inputState, setInput] = useState(initialState);
	//handleCreate function from global context
	const { handleCreate } = useGlobal();
	const navigate = useNavigate();
	//Api call for get course to show in course select field form
	const { data: courseData, loading: courseDataLoading } = useFetch(
		api_getAllCourse,
		fetchOptions("GET")
	);

	//Api call for get po to show in po select field form
	const { data: poData, loading: poDataLoading } = useFetch(
		api_getAllProgramOutcome,
		fetchOptions("GET")
	);
	//Api call for semester
	const { data: semesterData, loading: semesterLoading } = useFetch(
		api_getAllSemester,
		fetchOptions("GET")
	);
	console.log(semesterData);
	//set poOptions for multiple po Select
	let poOptions = [];
	if (!poDataLoading) {
		poData.forEach((pd) => {
			poOptions.push({ value: pd.id, label: pd.poCode });
		});
	}

	//submit co form data to create co
	const handleSubmit = (e) => {
		e.preventDefault();
		const apiEnd = api_createCourseOutcome;
		const payload = inputState;
		console.log(payload);
		const redirectTo = "/co";
		handleCreate(apiEnd, payload, redirectTo);

		setInput({ ...initialState }); //reset input field
	};
	//select multiple option with react-select package
	const handleSelect = (s) => {
		let p = [];
		s.forEach((s) => {
			p.push(s.value);
		});
		console.log(p);
	};

	//set selected poCode and semester  in Select field whenerver poId or semesterId is changed
	useEffect(() => {
		//filtering data from inputState id(semester/po)
		function getDataBy_filteringId(data, filterParam) {
			if (data) {
				const output = data.filter((d) => d.id === filterParam);
				const obj = output.length >= 1 && output[0];
				return obj;
			}
		}
		let poResult = getDataBy_filteringId(poData, inputState.programOutcomeId);
		setPocode(poResult.poCode); //setPocode to show poCode on selected option in selected field
		let semesResult = getDataBy_filteringId(
			semesterData,
			inputState.semesterId
		);
		setSemes(semesResult); //setSemes to show semester on selected option in selected field
	}, [
		inputState.programOutcomeId,
		poData,
		semesterData,
		inputState.semesterId,
	]);

	return (
		<div className="wrapper">
			<HeadMainToastComponent />
			<DashboardContentWrapper>
				<div className="row justify-content-center">
					<div className="col-sm-10 col-12">
						<div className="card shadow mt-0">
							<h3 className="text-center text-info my-5 font-weight-bold ">
								Create Course Outcomes
							</h3>

							{/* /.card-header */}
							{/* form start */}
							<form className="form-horizontal" onSubmit={handleSubmit}>
								<div className="card-body">
									<div className="form-group row">
										<label
											htmlFor="inputTitle"
											className="col-sm-2 col-form-label"
										>
											Semester
										</label>
										<div className="col-sm-10">
											<select
												required
												class="form-control form-control-sm "
												onChange={(e) => {
													setInput({
														...inputState,
														semesterId: e.target.value,
													});
													console.log(inputState.semesterId);
												}}
											>
												<option hidden disabled selected>
													-- select semester --
												</option>
												<option key={uuid()} value={inputState.semesterId}>
													{semes.title}-{semes.year}
												</option>
												{!semesterLoading &&
													semesterData.map((sm) => {
														return (
															<option key={uuid()} value={sm.id}>
																{sm.title} - {sm.year}
															</option>
														);
													})}
											</select>
										</div>
									</div>
									<div className="form-group row">
										<label
											htmlFor="inputTitle"
											className="col-sm-2 col-form-label"
										>
											Course Code
										</label>
										<div className="col-sm-10">
											<select
												required
												class="form-control form-control-sm "
												onChange={(e) =>
													setInput({
														...inputState,
														courseId: e.target.value.split(",")[0],
														courseNo: e.target.value.split(",")[1],
													})
												}
											>
												<option hidden disabled selected>
													-- select course code --
												</option>

												<option
													key={uuid()}
													value={[inputState.courseId, inputState.courseNo]}
												>
													{inputState.courseNo}
												</option>

												{!courseDataLoading &&
													courseData.map((cd) => {
														return (
															<option
																key={uuid()}
																value={[cd.id, cd.courseCode]}
															>
																{cd.courseCode}
															</option>
														);
													})}
											</select>
										</div>
									</div>
									<div className="form-group row">
										<label
											htmlFor="inputyear"
											className="col-sm-2 col-form-label"
										>
											CO Id
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												id="inputyear"
												placeholder="e.g. CO1"
												value={inputState.coCode}
												onChange={(e) =>
													setInput({ ...inputState, coCode: e.target.value })
												}
											/>
										</div>
									</div>
									<div className="form-group row">
										<label
											htmlFor="inputyear"
											className="col-sm-2 col-form-label"
										>
											PO Id
										</label>
										<div className="col-sm-10">
											<select
												required
												class="form-control form-control-sm "
												onChange={(e) => {
													setInput({
														...inputState,
														programOutcomeId: e.target.value,
													});
												}}
											>
												<option hidden disabled selected>
													-- select po id --
												</option>
												<option
													key={uuid()}
													value={inputState.programOutcomeId}
												>
													{poCode}
												</option>
												{!poDataLoading &&
													poData.map((pd) => {
														return (
															<option key={uuid()} value={pd.id}>
																{pd.poCode}
															</option>
														);
													})}
											</select>

											{/* <Select
												options={poOptions}
												isMulti
												onChange={handleSelect}
											/> */}
										</div>
									</div>
									<div className="form-group row">
										<label
											htmlFor="inputdescription"
											className="col-sm-2 col-form-label"
										>
											Description
										</label>
										<div className="col-sm-10">
											<textarea
												required
												class="form-control"
												id="inputdescription"
												rows="3"
												placeholder="description"
												value={inputState.description}
												onChange={(e) =>
													setInput({
														...inputState,
														description: e.target.value,
													})
												}
											></textarea>
										</div>
									</div>
								</div>
								{/* /.card-body */}
								<div className="card-footer text-center">
									<button
										type="submit"
										className="btn btn-danger button-cancel ml-3 float-right btn-sm"
										onClick={() => {
											navigate("/co");
										}}
									>
										Cancel
									</button>
									<button
										type="submit"
										className="btn btn-success button-create  float-right btn-sm"
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

export default Create;
