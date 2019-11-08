const form = document.getElementById("filter");

form.addEventListener("submit", e => {
	e.preventDefault();
	filterPriceRange();
	displayUIfiltered(filteredCuisines);
});

const filterPriceRange = () => {
	const priceRangeElement = document.getElementById("priceRanges").value;

	const priceRange = priceRangeElement.split("-");
	const priceRangeLow = parseInt(priceRange[0]);
	const priceRangeHigh = parseInt(priceRange[1]);

	const tempArray = restoArray.map(item => {
		return item.restaurant;
	});

	filteredCuisines = tempArray.filter(item => {
		return (
			item.average_cost_for_two <= priceRangeHigh &&
			item.average_cost_for_two >= priceRangeLow
		);
	});
};
