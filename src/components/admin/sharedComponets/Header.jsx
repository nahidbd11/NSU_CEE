import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../auth/Authcontext";

function Header() {
	const { handleLogout } = useAuth();
	return (
		<nav className="main-header navbar navbar-expand navbar-white navbar-light shadow-sm">
			{/* Left navbar links */}
			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link" data-widget="pushmenu" href="#" role="button">
						<i className="fas fa-bars" />
					</a>
				</li>
				<li className="nav-item d-none d-sm-inline-block">
					<Link to="/" className="nav-link">
						Home
					</Link>
				</li>
				{/* <li className="nav-item d-none d-sm-inline-block">
					<a href="#" className="nav-link">
						Contact
					</a>
				</li> */}
			</ul>
			{/* Right navbar links */}
			<ul className="navbar-nav ml-auto">
				{/* Navbar Search */}
				<li className="nav-item">
					<a
						className="nav-link"
						data-widget="navbar-search"
						href="#"
						role="button"
					>
						<i className="fas fa-search" />
					</a>
					<div className="navbar-search-block">
						<form className="form-inline">
							<div className="input-group input-group-sm">
								<input
									className="form-control form-control-navbar"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<div className="input-group-append">
									<button className="btn btn-navbar" type="submit">
										<i className="fas fa-search" />
									</button>
									<button
										className="btn btn-navbar"
										type="button"
										data-widget="navbar-search"
									>
										<i className="fas fa-times" />
									</button>
								</div>
							</div>
						</form>
					</div>
				</li>
				{/* Messages Dropdown Menu */}
				<li class="nav-item">
					<a class="nav-link" role="button" onClick={handleLogout}>
						<i class="fas fa-sign-out-alt mr-1"></i>Logout
					</a>
				</li>
				{/* Notifications Dropdown Menu */}

				<li className="nav-item">
					<a
						className="nav-link"
						data-widget="fullscreen"
						href="#"
						role="button"
					>
						<i className="fas fa-expand-arrows-alt" />
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
