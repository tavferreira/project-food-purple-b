const filterOnReviews = (restos, rating) => {
	let newArray = restos.filter(function (rest) {
		return rest.restaurant.user_rating.rating_text === rating;
	});

	return newArray;
}

const compare = (a, b) => {
	const restA = a.average_cost_for_two;
	const restB = b.average_cost_for_two;

	let compare = 0;
	if (restA > restB) {
		compare = 1
	}
	else if (restA < restB) {
		compare = -1
	}
	return compare;
}

const sortByPrice = restoArray => {
	return restoArray.sort(compare);
}

const form = document.getElementById("filter");

form.addEventListener("submit", e => {
	e.preventDefault();
	filterPriceRange();

	if (document.getElementById("sortByPrice").checked) {
		sortByPrice(filteredCuisines)
	}

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

	console.log(filteredCuisines);
};
