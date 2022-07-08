import { Routes } from "react-router-dom";
import { routesData } from "./utilities/routesData";
import useRoutesItem from "./customhooks/useRoutesItem";

function App() {
	const { routesItem } = useRoutesItem(routesData); //get Route component according to routesData
	return (
		<div>
			<Routes>{routesItem}</Routes>
		</div>
	);
}

export default App;
