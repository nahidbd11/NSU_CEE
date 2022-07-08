import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
const inactive = {
	opacity: 0.5,
};
function Breadcrumb() {
	const location = useLocation();
	// const params = useParams();
	const patharr = location.pathname.split("/").filter((x) => x);

	if (patharr.length === 0) {
		return null;
	}
	return (
		<>
			<nav>
				<div className="breadcrumb">
					<NavLink to="/">HOME /&nbsp; </NavLink>
					{patharr.map((path, index) => {
						const href = patharr.slice(0, index + 1).join("/");
						const isLast = index === patharr.length - 1;
						return (
							<div key={path}>
								{!isLast ? (
									<NavLink to={`/${href}`}>
										{path.toUpperCase()} /&nbsp;
									</NavLink>
								) : (
									<span style={inactive}>{path.toUpperCase()}</span>
								)}
							</div>
						);
					})}
				</div>
			</nav>
		</>
	);
}

export default Breadcrumb;
