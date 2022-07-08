import { useEffect, useState } from "react";

export default function useOutsideClick(ref) {
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		function handleClickOutside(event) {
			// console.log(ref.current, event.target);
			if (window.innerWidth < 992) {
				if (ref.current && !ref.current.contains(event.target)) {
					setIsClicked(true);
				} else {
					setIsClicked(false);
				}
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
	return isClicked;
}
