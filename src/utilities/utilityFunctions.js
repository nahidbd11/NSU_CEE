export const sentence_Breaker = (str, startIndex, endIndex) => {
	if (str.length >= endIndex) {
		return str.substring(startIndex, endIndex) + "....";
	} else {
		return str;
	}
};
