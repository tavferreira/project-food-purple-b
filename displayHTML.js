const displayUI = data => {
	data.forEach(restaurant => {
		document.getElementById(
			"restaurantList"
		).innerHTML += `<li>${restaurant.name}</li> <p>${restaurant.location.address}</p><p>${restaurant.average_cost_for_two} €</p> <img src="${restaurant.thumb}"><p>${restaurant.user_rating.aggregate_rating}</p><p>${restaurant.user_rating.rating_text}</p>`;
	});
};
