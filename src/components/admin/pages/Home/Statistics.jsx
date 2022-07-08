import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";
import "./statistics_card.css";
const Statistics = () => {

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-3 col-6 ">
					<div className="small-box bg-success gradient-1 shadow-lg">
						<div className="inner">
							<h5>Total Students</h5>
							<p>{ localStorage.getItem("totalStudent")}</p>
						</div>
						<div className="icon">
							<i className="ion ion-stats-bars" />
						</div>
						<Link to="/students" className="small-box-footer">
							More info <i className="fas fa-arrow-circle-right" />
						</Link>
					</div>
				</div>
				<div className="col-lg-3 col-6 ">
					<div className="small-box bg-success gradient-4 shadow-lg">
						<div className="inner">
							<h5>Total PO</h5>
							<p>{ localStorage.getItem("totalPo")}</p>
						</div>
						<div className="icon">
							<i className="ion ion-stats-bars" />
						</div>
						<Link to="/po" className="small-box-footer">
							More info <i className="fas fa-arrow-circle-right" />
						</Link>
					</div>
				</div>
				<div className="col-lg-3 col-6 ">
					<div className="small-box bg-warning gradient-2 shadow-lg">
						<div className="inner">
							<h5>Total CO</h5>
							<p>{ localStorage.getItem("totalCo")}</p>
						</div>
						<div className="icon">
							<i className="ion ion-person-add" />
						</div>
						<Link to="/co" className="small-box-footer">
							More info <i className="fas fa-arrow-circle-right" />
						</Link>
					</div>
				</div>
				<div className="col-lg-3 col-6 ">
					<div className="small-box bg-danger gradient-3 shadow-lg">
						<div className="inner">
							<h5>Total Course</h5>
							<p>{ localStorage.getItem("totalCourse")}</p>
						</div>
						<div className="icon">
							<i className="ion ion-pie-graph" />
						</div>
						<Link to="/course" className="small-box-footer">
							More info <i className="fas fa-arrow-circle-right" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
